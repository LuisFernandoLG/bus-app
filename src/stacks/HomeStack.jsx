import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchPlaceScreen } from "../screens/SearchPlaceScreen";

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = useMemo(
    () => ({
      safeAreaInsets: { top:0, bottom:0, left:0, right:0 },
    }),
    []
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="home2"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="searchPlace" component={SearchPlaceScreen} />
    </Stack.Navigator>
  );
};
