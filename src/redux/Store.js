// redux/store.js
import { legacy_createStore, combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";  // Ensure this path is correct
import { themeReducer } from "./Themereducer";


const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = legacy_createStore(rootReducer);
