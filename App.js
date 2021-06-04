import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// TODO: Importing Navigation
import Navigation from "./App/navigation/productsNavigator";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// TODO: importing Reducers
import productReducer from "./App/store/reducers/product.reducer";

//TODO: Combining reducer and creating redux store
const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(rootReducer);

//TODO: Main App Screen
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
