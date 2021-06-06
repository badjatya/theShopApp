import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function OrderItem(props) {
  return (
    <View style={styles.OrderItem}>
      <View style={styles.summary}>
        <Text style={styles.amount}>{props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button title="View Detail" />
    </View>
  );
}

const styles = StyleSheet.create({
  OrderItem: {},
  summary: {},
  amount: {},
  date: {},
});
