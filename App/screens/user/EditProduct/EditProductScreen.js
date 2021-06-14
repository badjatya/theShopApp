import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

// TODO: Importing redux store
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../../store/actions/product.action";

// TODO: Importing Components
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/UI/CustomHeaderButton/CustomHeaderButton";

// TODO: Importing Colors
import Colors from "../../../constants/Colors";

const EditProductScreen = (props) => {
  const { navigation, route } = props;

  // Dispatching
  const dispatch = useDispatch();

  // Checking the item is new or edit
  const prodId = route.params.productId;

  // managing state
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  // Adding a top save icon
  useEffect(() => {
    const submitHandler = () => {
      if (editedProduct) {
        dispatch(
          productActions.updateProduct(
            prodId,
            title,
            description,
            imageUrl,
            +price
          )
        );
      } else {
        dispatch(
          productActions.createProduct(title, description, imageUrl, +price)
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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/Edit_img.png")}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textInput}
            value={title}
            onChangeText={(inputText) => setTitle(inputText)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.textInput}
            value={imageUrl}
            onChangeText={(inputText) => setImageUrl(inputText)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.textInput}
            value={price.toString()}
            keyboardType="numeric"
            onChangeText={(inputText) => setPrice(inputText)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textInput}
            value={description}
            onChangeText={(inputText) => setDescription(inputText)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
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
