// Importing firebase
import * as firebase from "firebase";
let currentUserUID = firebase.auth().currentUser.uid;

// TODO: Importing Product Model
import Product from "../../models/product.model";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

// Fetching Products from firebase
export const fetchProducts = () => {
  return async (dispatch) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    // any async code you want!
    const response = await fetch(
      "https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );

    const resData = await response.json();
    const loadedProducts = [];

    for (const key in resData) {
      loadedProducts.push(
        new Product(
          key,
          "u1",
          resData[key].title,
          resData[key].imageUrl,
          resData[key].description,
          resData[key].price
        )
      );
    }

    dispatch({
      type: SET_PRODUCTS,
      products: loadedProducts,
      userProducts: loadedProducts.filter(prod.ownerId === currentUserUID),
    });
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    // Posting products to server
    const response = await fetch(
      "https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
          ownerId: currentUserUID,
        }),
      }
    );

    const resData = await response.json();

    // Now this will execute after the product is fetched
    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price,
        ownerId: currentUserUID,
      },
    });
  };
};

export const updateProduct = (id, title, description, imageUrl, price) => {
  return async (dispatch) => {
    await fetch(
      `https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
        }),
      }
    );

    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: {
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    await fetch(
      `https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/products/${productId}.json`,
      {
        method: "DELETE",
      }
    );

    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};
