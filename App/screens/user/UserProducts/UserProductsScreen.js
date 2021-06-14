import React from "react";
import { StyleSheet, Alert, View, FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing Components
import ProductItem from "../../../components/shop/ProductItem/ProductItem";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const UserProductsScreen = (props) => {
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
              props.navigation.push("Edit Products", {
                productId: itemData.item.id,
              })
            }
          >
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Edit"
                onClick={() =>
                  props.navigation.push("Edit Products", {
                    productId: itemData.item.id,
                  })
                }
              />
              <CustomButton
                title="Delete"
                onClick={() => deleteProductHandler(itemData.item.id)}
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
