import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector } from "react-redux";

// TODO: Importing Component
import ProductItem from "../../../components/shop/ProductItem/ProductItem";

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);

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
              <Button title="Edit" onPress={() => alert("Edit")} />
              <Button title="Delete" onPress={() => alert("delete")} />
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
