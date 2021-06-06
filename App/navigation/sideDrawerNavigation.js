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

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Colors
import Colors from "../constants/Colors";

// NOTE Creating Stack Navigator
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

// NOTE Creating Drawer Navigator
const orderDrawerNavigator = createDrawerNavigator();

const OrderDrawerNavigatorScreen = () => {
  return (
    <orderDrawerNavigator.Navigator>
      <orderDrawerNavigator.Screen
        name="Products"
        component={ProductsStackNavigatorScreen}
      />
      <orderDrawerNavigator.Screen
        name="Orders"
        component={OrderStackNavigatorScreen}
      />
    </orderDrawerNavigator.Navigator>
  );
};

export default OrderDrawerNavigatorScreen;
