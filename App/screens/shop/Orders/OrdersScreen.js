import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector } from "react-redux";

// TODO: Importing Components
import OrderItem from "../../../components/shop/OrderItem/OrderItem";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
          />
        )}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
