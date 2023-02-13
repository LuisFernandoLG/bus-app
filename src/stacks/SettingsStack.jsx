import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EditProfileScreen } from "../screens/EditProfileScreen";
import { GeneralSettingsScreen } from "../screens/GeneralSettingsScreen";
import { UserPanelScreen } from "../screens/UserPanelScreen";

export const SettingsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="panel"
        component={UserPanelScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfileScreen}
        options={{ title: "Editar perfil" }}
      />
      
      <Stack.Screen
        name="generalSettings"
        component={GeneralSettingsScreen}
        options={{ title: "Ajustes generales" }}
      />

    </Stack.Navigator>
  );
};
