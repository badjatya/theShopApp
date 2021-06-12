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
  }
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
      if (!titleIsValid) {
        Alert.alert("Wrong Input", "Please check details you entered", [
          { text: "Okay" },
        ]);
        return;
      }
      if (editedProduct) {
        dispatch(
          productsActions.updateProduct(prodId, title, description, imageUrl)
        );
      } else {
        dispatch(
          productsActions.createProduct(title, description, imageUrl, +price)
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
  }, [navigation, dispatch, prodId, title, description, imageUrl, price]);

  const titleChangeHandler = (text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input: "title",
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
            value={title}
            onChangeText={titleChangeHandler}
          />
        </View>
        {!titleIsValid && <Text>Please enter a valid Title!</Text>}

        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.textInput}
            value={imageUrl}
            onChangeText={(changedValue) => setImageUrl(changedValue)}
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              value={price.toString()}
              onChangeText={(changedValue) => setPrice(changedValue)}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textInput}
            autoCorrect
            value={description}
            onChangeText={(changedValue) => setDescription(changedValue)}
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
