import React from "react";
import { View, FlatList, Text, StatusBar } from "react-native";

// TODO: Importing Reducer
import { useSelector } from "react-redux";

//TODO: Importing Colors
import Colors from "../../../constants/Colors";

// TODO: Main Screen i.e ProductsOverviewScreen
const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
