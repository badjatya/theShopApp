import React from "react";
import { Platform } from "react-native";

// TODO: Importing CreateStackNavigator
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing createDrawerNavigator
import { createDrawerNavigator } from "@react-navigation/drawer";

// TODO: Importing productStackNavigator from same directory
import ProductsStackNavigatorScreen from "./productsNavigator";

// TODO: Importing Screens
import OrdersScreen from "../screens/shop/Orders/OrdersScreen";
import UserProductsScreen from "../screens/users/UserProducts/UserProductsScreen";
import EditProductScreen from "../screens/users/EditProduct/EditProductScreen";

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Icons

import { Ionicons } from "@expo/vector-icons";

// TODO: Importing Colors
import Colors from "../constants/Colors";

// NOTE Creating Stack Navigator for OrderScreen
const orderStackNavigator = createStackNavigator();

const OrderStackNavigatorScreen = () => {
  return (
    <orderStackNavigator.Navigator
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
      <orderStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </orderStackNavigator.Navigator>
  );
};

// NOTE Creating Stack Navigator for OrderScreen
const userProductsStackNavigator = createStackNavigator();

const UserProductsStackNavigatorScreen = () => {
  return (
    <userProductsStackNavigator.Navigator
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
      <userProductsStackNavigator.Screen
        name="Your Product"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() =>
                  navigation.push("Edit Product", {
                    productId: "null",
                  })
                }
              />
            </HeaderButtons>
          ),
        })}
      />

      <userProductsStackNavigator.Screen
        name="Edit Product"
        component={EditProductScreen}
        options={({ navigation, route }) => ({
          headerTitle:
            route.params.productId === "null" ? "Add Product" : "Edit Product",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Save"
                iconName={
                  Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
                }
                onPress={() => route.params.submit}
              />
            </HeaderButtons>
          ),
        })}
      />
    </userProductsStackNavigator.Navigator>
  );
};

// NOTE Creating Drawer Navigator
const orderDrawerNavigator = createDrawerNavigator();

const OrderDrawerNavigatorScreen = () => {
  return (
    <orderDrawerNavigator.Navigator>
      <orderDrawerNavigator.Screen
        name="Products"
        component={ProductsStackNavigatorScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={24}
              color={Colors.primary}
            />
          ),
        }}
      />
      <orderDrawerNavigator.Screen
        name="Orders"
        component={OrderStackNavigatorScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={24}
              color={Colors.primary}
            />
          ),
        }}
      />

      <orderDrawerNavigator.Screen
        name="Admin"
        component={UserProductsStackNavigatorScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={24}
              color={Colors.primary}
            />
          ),
        }}
      />
    </orderDrawerNavigator.Navigator>
  );
};

export default OrderDrawerNavigatorScreen;
