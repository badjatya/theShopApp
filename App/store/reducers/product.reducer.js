// TODO: Importing Products Data
import PRODUCTS from "../../data/dummy-product-data";

// TODO: Importing actions
import { DELETE_PRODUCT } from "../actions/product.action";

// NOTE Initial State for reducer
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

// NOTE ProductReducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }

  return state;
};

export default productReducer;
