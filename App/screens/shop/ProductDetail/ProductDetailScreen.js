import React from "react";
import { Text, View } from "react-native";

const ProductDetailScreen = (props) => {
  const { navigation, route } = props;
  const product = route.params;

  return (
    <View>
      <Text>{product.productTitle}</Text>
    </View>
  );
};

export default ProductDetailScreen;
