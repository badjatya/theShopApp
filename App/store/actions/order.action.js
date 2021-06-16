// TODO: Importing Order Model
import Order from "../../models/orders.model";

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

export const fetchOrders = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/orders/u1.json"
    );

    const resData = await response.json();
    const loadedOrders = [];

    for (const key in resData) {
      loadedOrders.push(
        new Order(
          key,
          resData[key].cartItems,
          resData[key].totalAmount,
          new Date(resData[key].date)
        )
      );
    }

    dispatch({
      type: SET_ORDER,
      orders: loadedOrders,
    });
  };
};

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch) => {
    const date = new Date();

    // Posting orders to server
    const response = await fetch(
      "https://theshopapp-24f57-default-rtdb.asia-southeast1.firebasedatabase.app/orders/u1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString(),
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date,
      },
    });
  };
};
