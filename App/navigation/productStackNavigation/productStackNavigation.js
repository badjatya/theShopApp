import React from "react";
import { Platform } from "react-native";

// TODO: Importing StackNavigator from react navigation
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing Screens
import ProductsOverviewScreen from "../../screens/shop/ProductsOverview/ProductsOverviewScreen";
import ProductDetailScreen from "../../screens/shop/ProductDetail/ProductDetailScreen";
import CartScreen from "../../screens/shop/Cart/CartScreen";

// TODO: Importing HeaderButtons
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// TODO: Importing Components
import CustomHeaderButton from "../../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Colors
import Colors from "../../constants/Colors";

// NOTE Creating ProductStackNavigator
const ProductStackNavigator = createStackNavigator();

const ProductStackNavigatorScreen = () => {
  return (
    <ProductStackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.white : Colors.primary,
      }}
    >
      <ProductStackNavigator.Screen
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

      <ProductStackNavigator.Screen
        name="Product Details"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
        })}
      />

      <ProductStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        // options={({ route }) => ({
        //   title: route.params.productTitle,
        // })}
      />
    </ProductStackNavigator.Navigator>
  );
};

export default ProductStackNavigatorScreen;
