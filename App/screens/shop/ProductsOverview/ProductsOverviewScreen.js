import React from "react";
import { View, FlatList, StatusBar } from "react-native";

// TODO: Importing Reducer
import { useSelector } from "react-redux";

// TODO: Importing Components
import ProductItem from "../../../components/shop/ProductItem/ProductItem";

//TODO: Importing Colors
import Colors from "../../../constants/Colors";

// NOTE: Main Screen i.e ProductsOverviewScreen
const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() =>
              props.navigation.push("Product Details", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              })
            }
            onAddToCart={() => alert("Added To Cart")}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
