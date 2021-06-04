import React from "react";
import { View, FlatList, Text } from "react-native";

// TODO: Importing Reducer
import { useSelector } from "react-redux";

// TODO: Main Screen i.e ProductsOverviewScreen
const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
