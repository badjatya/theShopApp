import React from "react";

// TODO: Creating Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing StackNavigator
import DrawerNavigatorScreen from "../DrawerNavigation/drawerNavigation";

// TODO: Importing Screens
import AuthScreen from "../../screens/user/AuthScreen/AuthScreen";

// AuthStackNavigator
const AuthStackNavigator = createStackNavigator();

const AuthStackNavigatorScreen = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} />
      <AuthStackNavigator.Screen
        name="Shop"
        component={DrawerNavigatorScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStackNavigatorScreen;
