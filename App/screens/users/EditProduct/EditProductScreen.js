import React, { useState, useReducer, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

// TODO: Importing redux
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/UI/CustomHeaderButton/CustomHeaderButton";

// Form Reducer
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const EditProductScreen = (props) => {
  // NOTE Params and navigation
  const { navigation, route } = props;
  const prodId = route.params.productId;

  // Using state and finding the product if that exists
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  // Dispatching
  const dispatch = useDispatch();

  // Creating a state to hold all state, useReducer hook takes two para function and a initial state
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : "",
      imageUrl: editedProduct ? editedProduct.imageUrl : "",
      description: editedProduct ? editedProduct.description : "",
      price: editedProduct ? editedProduct.price : "",
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  // Note for submitting the edited products

  useEffect(() => {
    const submitHandler = () => {
      if (!formState.formIsValid) {
        Alert.alert("Wrong Input", "Please check details you entered", [
          { text: "Okay" },
        ]);
        return;
      }
      if (editedProduct) {
        dispatch(
          productsActions.updateProduct(
            prodId,
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageUrl
          )
        );
      } else {
        dispatch(
          productsActions.createProduct(
            formState.inputValues.title,
            formState.inputValues.description,
            formState.inputValues.imageUrl,
            +formState.inputValues.price
          )
        );
      }

      navigation.goBack();
    };

    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
            }
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, dispatch, prodId, formState]);

  const textChangeHandler = (inputIdentifier, text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input: inputIdentifier,
    });
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="sentences"
            autoCorrect
            value={formState.inputValues.title}
            onChangeText={textChangeHandler.bind(this, "title")}
          />
        </View>
        {!formState.inputValidities.title && (
          <Text>Please enter a valid Title!</Text>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.textInput}
            value={formState.inputValues.imageUrl}
            onChangeText={textChangeHandler.bind(this, "imageUrl")}
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={formState.inputValues.price.toString()}
              onChangeText={textChangeHandler.bind(this, "price")}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textInput}
            autoCorrect
            value={formState.inputValues.description}
            onChangeText={textChangeHandler.bind(this, "description")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: { margin: 20 },
  formControl: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  textInput: {
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
