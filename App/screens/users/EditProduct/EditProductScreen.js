import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";

// TODO: Importing redux
import { useSelector, useDispatch } from "react-redux";
import * as productsActions from "../../../store/actions/product.action";

// TODO: Importing CustomHeaderButton for HeaderIcon
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/UI/CustomHeaderButton/CustomHeaderButton";

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

  // STATE
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  // Note for submitting the edited products

  useEffect(() => {
    const submitHandler = () => {
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

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="sentences"
            value={title}
            onChangeText={(changedValue) => setTitle(changedValue)}
          />
        </View>

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
