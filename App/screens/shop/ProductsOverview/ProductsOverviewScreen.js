import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";

// TODO: Importing Products data from redux
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../../store/actions/cart.action";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing Components
import ProductItem from "../../../components/shop/ProductItem/ProductItem";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const ProductsOverviewScreen = (props) => {
  const { navigation } = props;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  // Fetching Products from server to display on screen -- its functions
  const loadProducts = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(productsActions.fetchProducts());
    setIsRefreshing(false);
  }, [dispatch, setIsLoading]);

  // if an item is changed on server than we need to refetch it
  useEffect(() => {
    props.navigation.addListener("willFocus", loadProducts);
  }, [loadProducts]);

  // Fetching Products from server to display on screen
  useEffect(() => {
    loadProducts();
  }, [dispatch, loadProducts]);

  // For loading spinner
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  // For if no data is found
  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.centeredText}>
          No Products, please add from admin section
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        onRefresh={loadProducts}
        refreshing={isRefreshing}
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    color: Colors.primary,
    fontFamily: "open-sans",
    fontSize: 15,
  },
});
