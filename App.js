import React, { useState } from "react";

// TODO: importing Navigation
import Navigation from "./App/navigation/Navigation";

// TODO: Importing redux
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// Importing Redux Thunk
import ReduxThunk from "redux-thunk";

// TODO: Importing Reducers
import productReducer from "./App/store/reducers/product.reducer";
import cartReducer from "./App/store/reducers/cart.reducer";
import orderReducer from "./App/store/reducers/order.reducer";

// TODO: Importing Fonts
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

// TODO: Importing firebase
import * as firebase from "firebase";
import apiKeys from "./config/keys";

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

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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

  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
