import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  StyleSheet,
} from "react-native";

import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  // TODO => Getting Params from Navigation
  const { navigation, route } = props;
  const product = route.params;

  // TODO => Selecting Product
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((pro) => pro.id === product.productId)
  );

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => alert("Added to Cart")} />
      </View>
      <Text style={styles.price}>₹ {selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
  image: {},
  buttonContainer: {},
  price: {},
  description: {},
});

export default ProductDetailScreen;
