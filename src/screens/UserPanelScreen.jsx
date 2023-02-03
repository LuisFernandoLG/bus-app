import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Chip, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DefAvatar from "../../assets/images/avatar.png";
import { FlexContainer } from "../components/FlexContainer";
import { SettingsList } from "../components/SettingsList";

export const UserPanelScreen = () => {
  const navigation = useNavigation();

  const goToEditProfile = () => {
    navigation.navigate("editProfile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlexContainer flex_direction_r flex_ai_c flex_jc_c>
        <Avatar.Image size={120} source={DefAvatar} />
      </FlexContainer>
      <FlexContainer mgTop={20} flex_direction_r flex_ai_c flex_jc_c>
        <Chip mode="outlined">Luis Fernando López</Chip>
      </FlexContainer>
      <FlexContainer mgTop={20} flex_direction_r flex_ai_c flex_jc_c>
        <Text variant="bodyMedium">6242420721</Text>
      </FlexContainer>
      <FlexContainer mgTop={20} flex_ai_c flex_jc_c>
        <Button
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          icon={"arrow-right"}
          onPress={goToEditProfile}
        >
          Editar perfil
        </Button>
      </FlexContainer>
      <SettingsList />
      <FlexContainer mgTop={20} flex_ai_c flex_jc_c>
        <Button
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          icon={"logout"}
        >
          Cerrar sesión
        </Button>
      </FlexContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  name: {
    color: "red",
  },
  label: {
    marginTop: 15,
  },
});
