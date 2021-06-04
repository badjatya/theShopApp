import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// TODO: Importing Screens
import ProductsOverviewScreen from "../screens/shop/ProductsOverview/ProductsOverviewScreen";

// TODO: Creating Products stackNavigator and its Component
const productsStackNavigator = createStackNavigator();
const productsStackNavigatorScreen = () => {
  return (
    <productsStackNavigator.Navigator>
      <productsStackNavigator.Screen
        name="All Products"
        component={ProductsOverviewScreen}
      />
    </productsStackNavigator.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <productsStackNavigatorScreen />
    </NavigationContainer>
  );
};
