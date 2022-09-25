import React from "react";
import { CartState } from "../../context/Context";
import ProductCard from "./productCard/ProductCard";

const ProductsList = () => {
  const {
    state: { products },
    productDispatch,
    productState: {
      filterByColor,
      filterByGender,
      filterByPrice,
      filterByType,
      filterBySearchQuery,
    },
  } = CartState();

  const filterProducts = () => {
    let filteredItems = products;

    if (filterByColor.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByColor.includes(item.color)
      );
    }

    if (filterByGender.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByGender.includes(item.gender)
      );
    }

    if (filterByPrice.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByPrice.some((range) => {
          if (item.price >= range[0] && item.price <= range[1]) {
            return true;
          } else {
            return false;
          }
        })
      );
    }

    if (filterByType.length) {
      filteredItems = filteredItems.filter((item) =>
        filterByType.includes(item.type)
      );
    }

    if (filterBySearchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(filterBySearchQuery.toLowerCase())
      );
    }

    return filteredItems;
  };

  return (
    <div className="flex flex-wrap gap-16 justify-center">
      {filterProducts().length !== 0 ? (
        filterProducts().map((item) => (
          <ProductCard item={item} key={item.id} />
        ))
      ) : (
        <div className="flex flex-col space-y-4 sm:px-0 px-4">
          <h1 className="font-semibold">
            Hey! We don't have items for your matching filters.
          </h1>
          <button
            onClick={() =>
              productDispatch({
                type: "CLEAR_ALL_FILTERS",
              })
            }
            className="bg-amber-400 text-white p-2 rounded"
          >
            Explore Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
