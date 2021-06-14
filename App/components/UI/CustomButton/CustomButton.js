import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          props.disabled
            ? styles.disabledButtonContainer
            : styles.buttonContainer,
        ]}
        onPress={props.onClick}
      >
        <Text style={[props.disabled ? styles.disabledButton : styles.button]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  disabledButtonContainer: {
    borderColor: Colors.white,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
    textAlign: "center",
  },
  disabledButton: {
    fontFamily: "open-sans-bold",
    color: Colors.white,
    textAlign: "center",
  },
});
