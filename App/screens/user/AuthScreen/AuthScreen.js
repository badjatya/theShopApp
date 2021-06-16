import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

// TODO: Importing Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// TODO: Importing Components
import Card from "../../../components/UI/Card/Card";
import Input from "../../../components/UI/Input/Input";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient
        colors={[Colors.primary, Colors.white]}
        // start={[0.5, 0.5]}
        // end={[0.1, 0.3]}
        style={styles.keyboard}
      >
        <Card style={styles.authContainer}>
          <View>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid email address."
              onInputChange={() => {}}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorMessage="Please enter a valid password."
              onInputChange={() => {}}
              initialValue=""
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Login" onClick={() => alert("Login")} />
            </View>
            <Text style={styles.buttonText} onPress={() => alert("SignUp")}>
              Don't have an account? Sign Up
            </Text>
          </View>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});
