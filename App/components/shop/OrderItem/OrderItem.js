import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// TODO: Importing components
import Card from "../../UI/Card/Card";
import CustomButton from "../../UI/CustomButton/CustomButton";
import OrderItemList from "../../shop/OrderItemList/OrderItemList";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.price}>₹ {props.totalAmount}</Text>
          <Text style={styles.date}>{props.readableDate}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={showDetails ? "Hide Details" : "Show Details"}
            onClick={() => setShowDetails((initialValue) => !initialValue)}
          />
          {showDetails && (
            <View style={styles.detailItems}>
              {props.items.map((cartItem) => (
                <OrderItemList
                  key={cartItem.productId}
                  imageUrl={cartItem.productImageUrl}
                  quantity={cartItem.quantity}
                  amount={cartItem.sum}
                  title={cartItem.productTitle}
                />
              ))}
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 10,
  },
  orderSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonContainer: {},
  price: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  date: {
    color: Colors.text,
    fontFamily: "open-sans",
  },
  detailItems: {
    width: "100%",
  },
});
