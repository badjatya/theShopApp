// TODO: Importing Actions
import { ADD_ORDER } from "../actions/order.action";

// TODO: Importing model Order
import Order from "../../models/orders.model";

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        action.orderData.id,
        action.orderData.items,
        action.orderData.amount,
        action.orderData.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};

export default orderReducer;
