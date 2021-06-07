import React from "react";
import { StyleSheet, Button, View, FlatList, Alert } from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing Component
import ProductItem from "../../../components/shop/ProductItem/ProductItem";

const UserProductsScreen = (props) => {
  // Navigation
  const { navigation } = props;

  // Importing data from redux store state
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  // delete products function
  const deleteProductHandler = (id) => {
    Alert.alert("Are You Sure?", "You want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => dispatch(productsActions.deleteProduct(id)),
      },
    ]);
  };

  return (
    <View>
      <FlatList
        data={userProducts}
        renderItem={(itemData) => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() =>
              navigation.push("Edit Product", {
                productId: itemData.item.id,
              })
            }
          >
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() =>
                  navigation.push("Edit Product", {
                    productId: itemData.item.id,
                  })
                }
              />
              <Button
                title="Delete"
                onPress={() => deleteProductHandler(itemData.item.id)}
              />
            </View>
          </ProductItem>
        )}
      />
    </View>
  );
};

export default UserProductsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});
