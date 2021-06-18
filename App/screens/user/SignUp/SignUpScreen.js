import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// TODO: Importing Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// TODO: Importing firebase auth
import { registration } from "../../../../API/firebaseMethods";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

// TODO: Importing Components
import Card from "../../../components/UI/Card/Card";
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const SignUpScreen = (props) => {
  const { navigation } = props;

  // State
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = async () => {
    if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      setIsLoading(true);
      await registration(email, password, navigation);
      setIsLoading(false);
      emptyState();
    }
  };

  // For loading spinner
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

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

            <View style={styles.formControl}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.textInput}
                value={confirmPassword}
                onChangeText={(inputText) => setConfirmPassword(inputText)}
              />
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton title="Sign Up" onClick={handlePress} />
            </View>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.buttonText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;

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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
