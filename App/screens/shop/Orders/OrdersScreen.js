import React from "react";
import { FlatList } from "react-native";

// TODO: Importing redux store
import { useSelector } from "react-redux";

// TODO: Importing Components

import OrderItem from "../../../components/shop/OrderItem/OrderItem";

// TODO: Importing Colors
// import Colors from "../../../constants/Colors";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
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
