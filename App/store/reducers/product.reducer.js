// TODO: Importing Products Data
import PRODUCTS from "../../data/dummy-product-data";

// NOTE Initial State for reducer
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

// NOTE ProductReducer
const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
