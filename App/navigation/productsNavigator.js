import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverview/ProductsOverviewScreen";

//TODO: Importing Colors
// import Colors from "../constants/Colors";

const productsStackNavigator = createStackNavigator();

const ProductsStackNavigatorScreen = () => {
  return (
    <productsStackNavigator.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      //   headerMode="none"
    >
      <productsStackNavigator.Screen
        name="Home"
        component={ProductsOverviewScreen}
        // options={{ headerShown: false }}
      />
      {/* <productsStackNavigator.Screen name="Options" component={Options} /> */}
    </productsStackNavigator.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigatorScreen />
    </NavigationContainer>
  );
};
