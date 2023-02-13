import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Chip, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DefAvatar from "../../assets/images/avatar.png";
import { FlexContainer } from "../components/FlexContainer";
import { SettingsList } from "../components/SettingsList";
import BottomSheet from "@gorhom/bottom-sheet";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { ScrollView } from "react-native";

export const UserPanelScreen = () => {
  const navigation = useNavigation();

  const goToEditProfile = () => {
    navigation.navigate("editProfile");
  };

  const { snapPoints, handleSheetChanges, bottomSheetRef } = useBottomSheet();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <FlexContainer flex_direction_r flex_ai_c flex_jc_c>
          <Avatar.Image size={120} source={DefAvatar} />
        </FlexContainer>
        <FlexContainer mgTop={20} flex_direction_r flex_ai_c flex_jc_c>
          <Chip mode="outlined">Luis Fernando</Chip>
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
        {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.bottomSheet}
        >
        <Text>Holis</Text>
      </BottomSheet> */}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical:20
  },
  name: {
    color: "red",
  },
  label: {
    marginTop: 15,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 20,
  },
});
