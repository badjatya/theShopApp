import React from "react";
import { View, Flatlist, Text } from "react-native";

import { useSelector } from "react-redux";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      {/* <Flatlist
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      /> */}
      <Text>Hii</Text>
    </View>
  );
};

export default ProductsOverviewScreen;
