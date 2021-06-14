// TODO: Importing Actions from cart actions
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart.action";
import { ADD_ORDER } from "../actions/order.action";

// TODO: Importing models
import CartItem from "../../models/cart.model";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodImageUrl = addedProduct.imageUrl;

      let updateOrAddNewCartItem;

      if (state.items[addedProduct.id]) {
        // Updating quantity of existing products in cart
        updateOrAddNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          prodImageUrl,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        // Adding new items in cart
        updateOrAddNewCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodImageUrl,
          prodPrice
        );
      }

      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrAddNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;

      let updatedCartItems;

      // If quantity is grater than 1 than we have to decrease the quantity
      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.productImageUrl,
          selectedCartItem.sum - selectedCartItem.productPrice
        );

        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ORDER:
      return initialState;
  }

  return state;
};

export default cartReducer;
