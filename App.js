import React, { useState } from "react";

// TODO: importing Navigation
import Navigation from "./App/navigation/Navigation";

// TODO: Importing redux
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// TODO: Importing Reducers
import productReducer from "./App/store/reducers/product.reducer";
import cartReducer from "./App/store/reducers/cart.reducer";
import orderReducer from "./App/store/reducers/order.reducer";

// TODO: Importing Fonts
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

// Fetching Fonts
const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./App/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./App/assets/fonts/OpenSans-Bold.ttf"),
  });
};

// Combing Reducer and creating Store
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer);

export default function App() {
  // font state
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
