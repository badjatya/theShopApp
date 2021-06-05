// TODO: Importing Actions for Cart
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart.action";

// TODO: Importing Models from Cart Model
import CartItem from "../../models/Cart";

// Initial State of Cart
const initialState = {
  items: {},
  totalAmount: 0,
};

// NOTE CartReducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD_TO_CART Logic added in reducer
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // Logic for existing item in cart, Here we are increasing quantity
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        // Logic for new item to be added in Cart, here we are adding new items in cart
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    // NOTE Removing Items From Cart
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;

      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.prodPrice,
          selectedCartItem.prodTitle,
          selectedCartItem.sum - selectedCartItem.prodPrice
        );
        updatedCartItems = { ...state, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.prodPrice,
      };
  }
  return state;
};

export default cartReducer;
