import React from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing Component
import ProductItem from "../../../components/shop/ProductItem/ProductItem";

const UserProductsScreen = (props) => {
  const { navigation } = props;
  const userProducts = useSelector((state) => state.products.userProducts);

  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={userProducts}
        renderItem={(itemData) => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => alert("View Detail")}
          >
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() =>
                  navigation.push("Edit Product", {
                    id: itemData.item.id,
                  })
                }
              />
              <Button
                title="Delete"
                onPress={() =>
                  dispatch(productsActions.deleteProduct(itemData.item.id))
                }
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
