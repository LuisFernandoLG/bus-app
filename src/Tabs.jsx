import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignUpStack } from "./stacks/SignUpStack";
import { HomeStack } from "./stacks/HomeStack";
import { ReportsStack } from "./stacks/ReportsStack";
import { SettingsStack } from "./stacks/SettingsStack";

import { FontAwesome5 } from "@expo/vector-icons";
import { useLocationPermission } from "./hooks/useLocationPermission";

const CustomIcon = ({ focused, component: Icon, name }) => {
  if (focused)
    return (
      <Icon
        name={name}
        size={20}
        color={"#1c1626"}
        style={{
          backgroundColor: "#42b7ff71",
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 8,
        }}
      />
    );
  return <Icon name={name} size={20} color={"#9db2ce"} />;
};

export const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const {errorMsg} = useLocationPermission()

  return (
    <NavigationContainer>
      {/* <Tab.Navigator initialRouteName="homeStack"> */}
      <Tab.Navigator initialRouteName="signUp">
        <Tab.Screen
          name="signUp"
          component={SignUpStack}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="reportsStack"
          component={ReportsStack}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <CustomIcon {...props} component={FontAwesome5} name="envelope" />
            ),
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            headerShown: false,

            tabBarIcon: (props) => (
              <CustomIcon
                {...props}
                component={FontAwesome5}
                name="location-arrow"
              />
            ),

            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="panelStack"
          component={SettingsStack}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <CustomIcon {...props} component={FontAwesome5} name="user" />
            ),

            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
