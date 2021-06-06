import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ProductsStackNavigatorScreen from "./productsNavigator";

// NOTE NavigationContainer
export default () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigatorScreen />
    </NavigationContainer>
  );
};
