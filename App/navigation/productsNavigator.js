import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverview/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetail/ProductDetailScreen";

//TODO: Importing Colors
import Colors from "../constants/Colors";

const productsStackNavigator = createStackNavigator();

const ProductsStackNavigatorScreen = () => {
  return (
    <productsStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
      }}
    >
      <productsStackNavigator.Screen
        name="All Products"
        component={ProductsOverviewScreen}
      />

      <productsStackNavigator.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ navigation, route }) => ({
          title: route.params.productTitle,
        })}
      />
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
