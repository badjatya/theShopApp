import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";

// TODO: Importing Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// TODO: Importing firebase auth
import { registration } from "../../../../API/firebaseMethods";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// TODO: Importing Components
import Card from "../../../components/UI/Card/Card";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const LoginScreen = (props) => {
  const { navigation } = props;

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[Colors.primary, Colors.white]}
        // start={[0.5, 0.5]}
        // end={[0.1, 0.3]}
        style={styles.keyboard}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/images/logo.png")}
        />
        <Card style={styles.authContainer}>
          <View>
            <View style={styles.formControl}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={(inputText) => setEmail(inputText)}
              />
            </View>

            <View style={styles.formControl}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(inputText) => setPassword(inputText)}
              />
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton title="Login" onClick={() => alert("Login")} />
            </View>
            <Text style={styles.buttonText} onPress={() => alert("Hi")}>
              Don't have an account? Sign Up
            </Text>
          </View>
        </Card>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 250,
  },
  authContainer: {
    width: "80%",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 15,
    marginBottom: 6,
  },
  buttonText: {
    fontFamily: "open-sans",
    fontSize: 13,
  },
  formControl: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
    fontSize: 16,
  },
  textInput: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 3,
  },
});
