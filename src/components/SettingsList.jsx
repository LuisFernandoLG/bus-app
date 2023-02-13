import { useNavigation } from "@react-navigation/native";
import React from "react";
import { List } from "react-native-paper";
import { FlexContainer } from "./FlexContainer";

export const SettingsList = () => {

  const navigation = useNavigation();

  const goToGeneralSettings = ()=>{ 
    navigation.navigate("generalSettings")
  }

  return (
    <FlexContainer mgTop={30}>
      <List.Item
        title="Configuración"
        left={(props) => <List.Icon {...props} icon="cog" />}
        right={(props) => <List.Icon {...props} icon="arrow-right" />}
        onPress={goToGeneralSettings}
        />

      <List.Item
        title="Términos y condiciones"
        left={(props) => <List.Icon {...props} icon="note-text" />}
        right={(props) => <List.Icon {...props} icon="arrow-right" />}
        onPress={()=> console.log("")}
        />
      <List.Item
        title="Ayuda"
        left={(props) => <List.Icon {...props} icon="help" />}
        right={(props) => <List.Icon {...props} icon="arrow-right" />}
        onPress={()=> console.log("")}
        />
    </FlexContainer>
  );
};
