import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

// TODO: Importing Products data from redux
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../../store/actions/cart.action";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing Components
import ProductItem from "../../../components/shop/ProductItem/ProductItem";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

// TODO: Importing Colors
// import Colors from "../../../constants/Colors";

const ProductsOverviewScreen = (props) => {
  const { navigation } = props;
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  // Fetching Products from server to display on screen
  useEffect(() => {
    dispatch(productsActions.fetchProducts());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() =>
              navigation.push("Product Details", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              })
            }
          >
            <View style={styles.buttonContainer}>
              <CustomButton
                title="View Detail"
                onClick={() =>
                  navigation.push("Product Details", {
                    productId: itemData.item.id,
                    productTitle: itemData.item.title,
                  })
                }
              />
              <CustomButton
                title="Add To Cart"
                onClick={() => dispatch(cartActions.addToCart(itemData.item))}
              />
            </View>
          </ProductItem>
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
