import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  MD3Colors,
  Text,
  TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexContainer } from "../components/FlexContainer";
import DefAvatar from "../../assets/images/avatar.png";
import { useNavigation } from "@react-navigation/native";

export const EditProfileScreen = () => {
  const navigation = useNavigation()

  const handleClick = ()=>{
    navigation.navigate("panel")
  }

  return (
    <SafeAreaView>
      <FlexContainer flex_ai_c flex_jc_c>
        <Avatar.Image size={120} source={DefAvatar} />
        <IconButton icon="pencil" mode="contained" />
      </FlexContainer>

      <FlexContainer pdHorizontal={30} flex_jc_c>
        <TextInput mode="outlined" value="Luis Fernando" label="Nombre" keyboardType="number-pad" />
        <TextInput
          mode="outlined"
          label="Correo"
          value="luislopez1099lg@gmail.com"
          keyboardType="number-pad"
          style={{marginVertical:20}}
        />
        <TextInput
          disabled
          mode="outlined"
          value="6242420721"
          label="Teléfono"
          keyboardType="number-pad"
        />
      </FlexContainer>

      <FlexContainer mgTop={20} flex_ai_c>
        <Button onPress={handleClick} mode="contained">Guardar</Button>
      </FlexContainer>
    </SafeAreaView>
  );
};
