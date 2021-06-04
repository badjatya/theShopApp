import React from "react";
import { View, Button, Text, Image } from "react-native";

// TODO: Importing Styles
import styles from "./style";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.imageUrl }} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View Detail" onPress={props.onViewDetail} />
        <Button title="Add To Cart" onPress={props.onAddToCart} />
      </View>
    </View>
  );
};

export default ProductItem;
