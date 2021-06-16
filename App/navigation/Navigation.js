import React from "react";

// TODO: Importing NavigationContainer from react-navigation
import { NavigationContainer } from "@react-navigation/native";

// TODO: Importing Top Navigation Screen
import DrawerNavigatorScreen from "./DrawerNavigation/drawerNavigation";
import AuthStackNavigatorScreen from "./AuthNavigation/authNavigation";

// Creating Navigation Container

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigatorScreen /> */}
      <AuthStackNavigatorScreen />
    </NavigationContainer>
  );
};

export default Navigation;
