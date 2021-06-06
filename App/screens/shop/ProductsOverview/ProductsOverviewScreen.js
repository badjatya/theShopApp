import React from "react";
import { View, FlatList, StatusBar, Button } from "react-native";

// TODO: Importing Reducer
import { useSelector, useDispatch } from "react-redux";

// TODO: Importing actions
import * as CartActions from "../../../store/actions/cart.action";

// TODO: Importing Components
import ProductItem from "../../../components/shop/ProductItem/ProductItem";

// TODO: Importing styles
import styles from "./style";

//TODO: Importing Colors
import Colors from "../../../constants/Colors";

// NOTE: Main Screen i.e ProductsOverviewScreen
const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
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
            onSelect={() =>
              props.navigation.push("Product Details", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              })
            }
          >
            <View style={styles.buttonContainer}>
              <Button
                title="View Detail"
                onPress={() =>
                  props.navigation.push("Product Details", {
                    productId: itemData.item.id,
                    productTitle: itemData.item.title,
                  })
                }
              />
              <Button
                title="Add To Cart"
                onPress={() => dispatch(CartActions.addToCart(itemData.item))}
              />
            </View>
          </ProductItem>
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
