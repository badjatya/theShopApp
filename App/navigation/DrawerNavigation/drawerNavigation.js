import React from "react";
import { Platform } from "react-native";

// TODO: Importing createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing drawer Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

// TODO: Importing ProductsStackNavigation
import ProductStackNavigatorScreen from "../productStackNavigation/productStackNavigation";

// TODO: Importing Screens
import OrdersScreen from "../../screens/shop/Orders/OrdersScreen";
import UserProductsScreen from "../../screens/user/UserProducts/UserProductsScreen";
import EditProductScreen from "../../screens/user/EditProduct/EditProductScreen";

// TODO: Importing HeaderButtons
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// TODO: Importing Components
import CustomHeaderButton from "../../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Colors
import Colors from "../../constants/Colors";

// TODO: Importing Icons
import { Ionicons } from "@expo/vector-icons";

// NOTE Creating OrdersStackNavigation
const ordersStackNavigator = createStackNavigator();

const ordersStackNavigatorScreen = () => {
  return (
    <ordersStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.white : Colors.primary,
      }}
    >
      <ordersStackNavigator.Screen
        name="My Orders"
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
    </ordersStackNavigator.Navigator>
  );
};

// NOTE Creating adminStackNavigator
const adminStackNavigator = createStackNavigator();

const AdminStackNavigatorScreen = () => {
  return (
    <adminStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.white : Colors.primary,
      }}
    >
      <adminStackNavigator.Screen
        name="Your Products"
        component={UserProductsScreen}
        options={({ navigation, route }) => ({
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
                title="Edit"
                iconName={
                  Platform.OS === "android" ? "md-create" : "ios-create"
                }
                onPress={() =>
                  navigation.push("Edit Products", {
                    productId: "null",
                  })
                }
              />
            </HeaderButtons>
          ),
        })}
      />

      <adminStackNavigator.Screen
        name="Edit Products"
        component={EditProductScreen}
        options={({ navigation, route }) => ({
          headerTitle:
            route.params.productId === "null" ? "Add Product" : "Edit Product",
        })}
      />
    </adminStackNavigator.Navigator>
  );
};

// NOTE Creating the DRAWER NAVIGATION
const drawerNavigator = createDrawerNavigator();

const DrawerNavigatorScreen = () => {
  return (
    <drawerNavigator.Navigator>
      <drawerNavigator.Screen
        name="Products"
        component={ProductStackNavigatorScreen}
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
      <drawerNavigator.Screen
        name="Orders"
        component={ordersStackNavigatorScreen}
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
      <drawerNavigator.Screen
        name="Admin"
        component={AdminStackNavigatorScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={24}
              color={Colors.primary}
            />
          ),
        }}
      />
    </drawerNavigator.Navigator>
  );
};

export default DrawerNavigatorScreen;
