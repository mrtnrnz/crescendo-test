import axiosInstance from "../axiosInstance";

import * as productTypes from "../action_types/productTypes";

export const getRecipeData = (data) => {
  return {
    type: productTypes.GET_RECIPES_DATA,
    data: data
  };
};

export const getSpecialRecipeData = (data) => {
  return {
    type: productTypes.GET_SPECIAL_RECIPE_DATA,
    data: data
  };
};

export const getAllRecipesHandler = () => {
  return (dispatch) => {
    return axiosInstance.request({
      url: "/recipes",
      method: "GET"
    })
    .then(response => {
      dispatch(getRecipeData(response.data));
    })
    .catch(error => {});
  };
};

export const getAllSpecialRecipesHandler = () => {
  return (dispatch) => {
    return axiosInstance.request({
      url: "/specials",
      method: "GET"
    })
    .then(response => {
      dispatch(getSpecialRecipeData(response.data));
    })
    .catch(error => console.log(error));
  };
};