import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector } from "react-redux";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
