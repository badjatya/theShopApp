import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// TODO: Using redux store
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../../store/actions/cart.action";

// import styles from "../../../components/shop/ProductItem/style";

// TODO: Importing Components
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const ProductDetailScreen = (props) => {
  const { navigation, route } = props;
  const product = route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find(
      (prod) => prod.id === product.productId
    )
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <View style={styles.summary}>
        <Text style={styles.price}>₹ {selectedProduct.price}</Text>
        <CustomButton
          title="Add to Cart"
          onClick={() => dispatch(cartActions.addToCart(selectedProduct))}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    marginHorizontal: 20,
  },
  price: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    backgroundColor: Colors.primary,
    color: Colors.white,
    padding: 10,
    borderRadius: 5,
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  descriptionTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    textAlign: "justify",
    fontFamily: "open-sans",
  },
});
