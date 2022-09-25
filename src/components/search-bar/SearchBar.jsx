import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { CartState } from "../../context/Context";

const SearchBar = () => {
  const { productDispatch } = CartState();
  return (
    <div className="py-8 text-center">
      <div className="flex items-center gap-4 justify-center">
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <input
            className="border-b-[1px] border-amber-600 p-2 sm:w-96"
            type="text"
            name="searchText"
            id="searchText"
            placeholder="Search for products..."
            onChange={(e) => {
              productDispatch({
                type: "SEARCH_FILTER",
                payload: e.target.value,
              });
            }}
          />
        )}
        <button className="border-none bg-white p-2 text-xl text-black">
          <BiSearchAlt2 />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
