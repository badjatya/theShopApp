import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

// TODO: Importing Styles
import styles from "./style";

// NOTE ProductItem Component
const ProductItem = (props) => {
  // Creating a Custom Variable to switch from TouchableNativeFeedback if platform is android
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={props.imageUrl ? { uri: props.imageUrl } : null}
              />
            </View>
            <View style={styles.detail}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>₹ {props.price}</Text>
            </View>
            {props.children}
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default ProductItem;
