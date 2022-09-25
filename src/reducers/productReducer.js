export const productReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "FILTER_BY_COLOR":
      const { color, checked } = action.payload;
      return {
        ...state,
        filterByColor: checked
          ? [...state.filterByColor, color]
          : state.filterByColor.filter((item) => item !== color),
      };
    case "FILTER_BY_GENDER":
      const { gender, checked: genderChecked } = action.payload;
      return {
        ...state,
        filterByGender: genderChecked
          ? [...state.filterByGender, gender]
          : state.filterByGender.filter((item) => item !== gender),
      };

    case "FILTER_BY_PRICE":
      const { range, checked: priceChecked } = action.payload;
      return {
        ...state,
        filterByPrice: priceChecked
          ? [...state.filterByPrice, range]
          : state.filterByPrice.filter(
              (item) => item[0] !== range[0] && item[1] !== range[1]
            ),
      };

    case "FILTER_BY_TYPE":
      const { type, checked: typeChecked } = action.payload;
      return {
        ...state,
        filterByType: typeChecked
          ? [...state.filterByType, type]
          : state.filterByType.filter((item) => item !== type),
      };

    case "CLEAR_ALL_FILTERS":
      return {
        filterByColor: [],
        filterByGender: [],
        filterByPrice: [],
        filterByType: [],
      };

    case "SEARCH_FILTER":
      return {
        ...state,
        filterBySearchQuery: action.payload,
      };
    default:
      return state;
  }
};
