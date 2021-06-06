import React from "react";
import { Platform } from "react-native";

// TODO: Importing Navigation Container and CreateStackNavigator

import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverview/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetail/ProductDetailScreen";
import CartScreen from "../screens/shop/Cart/CartScreen";

// TODO: Importing Colors
import Colors from "../constants/Colors";

// NOTE ProductStackNavigator
const productsStackNavigator = createStackNavigator();

const ProductsStackNavigatorScreen = () => {
  return (
    <productsStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
      }}
    >
      <productsStackNavigator.Screen
        name="All Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => navigation.push("Cart")}
              />
            </HeaderButtons>
          ),
        })}
      />

      <productsStackNavigator.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ navigation, route }) => ({
          title: route.params.productTitle,
        })}
      />

      <productsStackNavigator.Screen name="Cart" component={CartScreen} />
    </productsStackNavigator.Navigator>
  );
};

export default ProductsStackNavigatorScreen;
