import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

// TODO: Importing Redux
import { useSelector, useDispatch } from "react-redux";

// TODO: Importing actions
import * as cartActions from "../../../store/actions/cart.action";
import * as ordersActions from "../../../store/actions/order.action";

// TODO: Importing Components
import CartItem from "../../../components/shop/CartItem/CartItem";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// NOTE CartScreen
const CartScreen = () => {
  // Using data from state and converting Object to array so that we can use FlatList
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  // Using dispatch for removing the items from cart
  const dispatch = useDispatch();

  // Rendering CartScreen
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>₹ {cartTotalAmount}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() =>
            dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
          }
        />
      </View>

      {/* Using CartItem component in FlatList */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() =>
              dispatch(cartActions.removeFromCart(itemData.item.productId))
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
