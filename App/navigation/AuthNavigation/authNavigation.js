import React from "react";

// TODO: Creating Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing StackNavigator
import DrawerNavigatorScreen from "../DrawerNavigation/drawerNavigation";

// TODO: Importing Screens
import SignUpScreen from "../../screens/user/SignUp/SignUpScreen";
import LoginScreen from "../../screens/user/Login/LoginScreen";

// AuthStackNavigator
const AuthStackNavigator = createStackNavigator();

const AuthStackNavigatorScreen = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName={SignUpScreen}>
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStackNavigator.Screen
        name="Shop"
        component={DrawerNavigatorScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStackNavigatorScreen;
