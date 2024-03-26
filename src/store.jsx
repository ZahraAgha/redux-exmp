import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoriesReducer from "./CategoryReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});
  
const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
