import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OrderDrawerNavigatorScreen from "./sideDrawerNavigation";

// NOTE NavigationContainer
export default () => {
  return (
    <NavigationContainer>
      <OrderDrawerNavigatorScreen />
    </NavigationContainer>
  );
};
