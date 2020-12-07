import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./reducers/rootReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;