import { combineReducers } from "redux";

import ProductsReducer from "./productsReducer";

const RootReducer = combineReducers({
  products: ProductsReducer
});

export default RootReducer;