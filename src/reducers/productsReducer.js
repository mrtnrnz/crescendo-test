import * as productTypes from "../action_types/productTypes";

const initState = {
  products: "",
  specialProducts: "",
};

const ProductsReducer = (state = initState, action) => {
  switch(action.type) {
    case productTypes.GET_RECIPES_DATA:
      return {
        ...state,
        products: action.data
      };
    case productTypes.GET_SPECIAL_RECIPE_DATA:
      return {
        ...state,
        specialProducts: action.data
      };
    default:
      return state;
  }
};

export default ProductsReducer;