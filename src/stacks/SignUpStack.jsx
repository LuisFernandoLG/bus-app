import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChooseLocationScreen } from "../screens/ChooseLocationScreen";
import { EnterYourPhoneScreen } from "../screens/EnterYourPhoneScreen";
import { VerifyNumberScreen } from "../screens/VerifyNumberScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";

export const SignUpStack = (props) => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="enterYourPhone"
          component={EnterYourPhoneScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="verifyYourNumber"
          component={VerifyNumberScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="chooseLocation"
          component={ChooseLocationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};
