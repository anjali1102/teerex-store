export const cartReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "FETCH_DATA":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };

    default:
      return state;
  }
};
