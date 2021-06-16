import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, StyleSheet } from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";
import * as ordersActions from "../../../store/actions/order.action";

// TODO: Importing Components
import OrderItem from "../../../components/shop/OrderItem/OrderItem";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const OrdersScreen = () => {
  //State
  const [isLoading, setIsLoading] = useState(false);

  // Fetching orders
  const orders = useSelector((state) => state.orders.orders);

  // Dispatch
  const dispatch = useDispatch();

  // Fetch order function
  const fetchOrder = async () => {
    setIsLoading(true);
    dispatch(ordersActions.fetchOrders());
    setIsLoading(false);
  };

  // Fetching orders from server
  useEffect(() => {
    fetchOrder();
  }, [dispatch, fetchOrder]);

  // For loading spinner
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => (
        <OrderItem
          totalAmount={itemData.item.totalAmount}
          readableDate={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
