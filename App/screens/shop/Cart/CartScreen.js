import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";

// TODO: Importing cart actions
import * as cartActions from "../../../store/actions/cart.action";
import * as orderActions from "../../../store/actions/order.action";

// TODO: Importing Components
import Card from "../../../components/UI/Card/Card";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import CartItem from "../../../components/shop/CartItem/CartItem";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const CartScreen = () => {
  // For loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // Using data from state and converting Object to array so that we can use FlatList
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        productImageUrl: state.cart.items[key].productImageUrl,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  // set order function
  const setOrder = async () => {
    setIsLoading(true);
    await dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={{ marginBottom: 50 }}>
      <Card style={styles.card}>
        <View style={styles.summary}>
          <Text style={styles.total}>
            Total: <Text style={styles.price}>₹ {cartTotalAmount}</Text>
          </Text>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <CustomButton
              title="Order Now"
              onClick={setOrder}
              disabled={cartItems.length === 0}
            />
          )}
        </View>
      </Card>

      {/* Using cartItems converted array to render cartItems  */}

      <FlatList
        style={{ marginBottom: 50 }}
        data={cartItems}
        keyExtractor={(item) => item.productId}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            imageUrl={itemData.item.productImageUrl}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deleteIconEnabled
            onRemove={() =>
              dispatch(cartActions.removeFromCart(itemData.item.productId))
            }
          />
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  price: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
});
