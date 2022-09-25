import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../constants/constants";
import { cartReducer } from "../reducers/cartReducer";
import { productReducer } from "../reducers/productReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const getProductsData = async () => {
    await fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_DATA",
          payload: data,
        });
      });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    filterByColor: [],
    filterByGender: [],
    filterByPrice: [],
    filterByType: [],
    filterBySearchQuery: "",
  });

  return (
    <CartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
