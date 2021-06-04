import React, { useState } from "react";

// TODO: Importing for Fonts
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

// TODO: Importing Navigation
import Navigation from "./App/navigation/productsNavigator";

// TODO: importing Reducers
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./App/store/reducers/product.reducer";

// TODO: Combining reducer and creating redux store
const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(rootReducer);

// NOTE Fetching fonts
const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./App/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./App/assets/fonts/OpenSans-Bold.ttf"),
  });
};

// TODO Main App Screen
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => alert(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
