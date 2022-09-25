import React from "react";
import { filterLabels } from "../../constants/constants";
import { CartState } from "../../context/Context";

const FilterBar = () => {
  const {
    productDispatch,
    productState: {
      filterByColor,
      filterByGender,
      filterByPrice,
      filterByType,
    },
  } = CartState();

  return (
    <div className="flex flex-col bg-slate-300 px-8 w-52 p-4 mx-12">
      <div className="flex flex-col space-y-4">
        <div className="color">
          <label htmlFor="color" id="color" className="font-semibold">
            Color
          </label>
          {filterLabels.color.map((colorChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "FILTER_BY_COLOR",
                        payload: { color: colorChoice, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "FILTER_BY_COLOR",
                        payload: { color: colorChoice, checked: false },
                      });
                    }
                  }}
                  checked={filterByColor.includes(colorChoice) ? true : false}
                />
                {colorChoice}
              </div>
            );
          })}
        </div>

        <div className="gender">
          <label htmlFor="gender" id="gender" className="font-semibold">
            Gender
          </label>
          {filterLabels.gender.map((genderChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "FILTER_BY_GENDER",
                        payload: { gender: genderChoice, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "FILTER_BY_GENDER",
                        payload: { gender: genderChoice, checked: false },
                      });
                    }
                  }}
                  checked={filterByGender.includes(genderChoice) ? true : false}
                />
                {genderChoice}
              </div>
            );
          })}
        </div>

        <div className="price">
          <label htmlFor="price" id="price" className="font-semibold">
            Price
          </label>
          {filterLabels.price.map((priceChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "FILTER_BY_PRICE",
                        payload: { range: priceChoice, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "FILTER_BY_PRICE",
                        payload: { range: priceChoice, checked: false },
                      });
                    }
                  }}
                  checked={filterByPrice.some((range) => {
                    return (
                      priceChoice[0] === range[0] && priceChoice[1] === range[1]
                    );
                  })}
                />
                ₹ {priceChoice.join("-")}
              </div>
            );
          })}
        </div>

        <div className="type">
          <label htmlFor="type" id="type" className="font-semibold">
            Type
          </label>
          {filterLabels.type.map((typeChoice, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  key={index}
                  onChange={(e) => {
                    if (e.target.checked) {
                      productDispatch({
                        type: "FILTER_BY_TYPE",
                        payload: { type: typeChoice, checked: true },
                      });
                    } else {
                      productDispatch({
                        type: "FILTER_BY_TYPE",
                        payload: { type: typeChoice, checked: false },
                      });
                    }
                  }}
                  checked={filterByType.includes(typeChoice) ? true : false}
                />
                {typeChoice}
              </div>
            );
          })}
        </div>

        <button
          onClick={() =>
            productDispatch({
              type: "CLEAR_ALL_FILTERS",
            })
          }
          className="bg-amber-400 text-white p-2 rounded"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
