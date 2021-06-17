import React, { useReducer, useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// TODO: Importing Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// TODO: Importing redux store
// import { useDispatch } from "react-redux";
// import * as authActions from "../../../store/actions/auth.action";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// TODO: Importing Components
import Card from "../../../components/UI/Card/Card";
import Input from "../../../components/UI/Input/Input";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const AuthScreen = () => {
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
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
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
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />

            <View style={styles.buttonContainer}>
              <CustomButton title="Login" onClick={signupHandler} />
            </View>
            <Text style={styles.buttonText} onPress={() => alert("SignUp")}>
              Don't have an account? Sign Up
            </Text>
          </View>
        </Card>
      </LinearGradient>
    </View>
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
});
