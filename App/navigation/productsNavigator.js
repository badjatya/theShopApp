import React from "react";
import { Platform } from "react-native";

// TODO: Importing Navigation Container and CreateStackNavigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverview/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetail/ProductDetailScreen";

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
        options={{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => alert("hell")}
              />
            </HeaderButtons>
          ),
        }}
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

// NOTE NavigationContainer
export default () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigatorScreen />
    </NavigationContainer>
  );
};
