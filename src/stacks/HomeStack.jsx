import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="home2" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
  
  );
};
