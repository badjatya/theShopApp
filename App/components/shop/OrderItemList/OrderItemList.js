import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// TODO: Importing Components
import Card from "../../UI/Card/Card";
import CustomButton from "../../UI/CustomButton/CustomButton";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const OrderItemList = (props) => {
  return (
    <View>
      {props.imageUrl && (
        <Card style={styles.card}>
          <View style={styles.cardItems}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: props.imageUrl }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.quantity}>{props.quantity}</Text>
              <Text style={styles.amount}>₹ {props.amount}</Text>
            </View>
          </View>
        </Card>
      )}
    </View>
  );
};

export default OrderItemList;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 10,
  },
  cardItems: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "25%",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailContainer: {
    marginVertical: 2,
    marginLeft: 25,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.primary,
    paddingVertical: 5,
  },
  quantity: {
    fontFamily: "open-sans",
    color: Colors.text,
    paddingVertical: 5,
  },
  amount: {
    fontFamily: "open-sans",
  },
});
