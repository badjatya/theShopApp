import React from "react";

// TODO: Importing NavigationContainer from react-navigation
import { NavigationContainer } from "@react-navigation/native";

// TODO: Importing Top Navigation Screen
import DrawerNavigatorScreen from "./DrawerNavigation/drawerNavigation";

// Creating Navigation Container

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigatorScreen />
    </NavigationContainer>
  );
};

export default Navigation;
