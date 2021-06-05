import React from "react";
import { Text, View, ScrollView, Image, Button } from "react-native";

// TODO: Importing redux store
import { useSelector } from "react-redux";

// TODO: Importing Styles
import styles from "./style";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// NOTE ProductDetailScreen
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
        <Button
          title="Add to Cart"
          onPress={() => alert("Added to Cart")}
          color={Colors.primary}
        />
      </View>
      <Text style={styles.price}>₹ {selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;
