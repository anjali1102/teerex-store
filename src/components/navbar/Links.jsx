import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Context";

const Links = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="pr-2">
      <ul className="flex sm:gap-8 gap-2 text-xl text-black items-center">
        <li>
          <NavLink to="/"> Products </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <p className="flex text-sm justify-center items-center absolute right-[8px] top-[22px] sm:top-[20px] sm:right-[38px] w-6 h-6 bg-red-400 text-white rounded-full">
              {cart.length || 0}
            </p>
            <AiOutlineShoppingCart />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Links;
