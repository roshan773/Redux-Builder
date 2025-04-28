// redux/action.js
import { ADD, REDUCE, THEME } from "./Actiontype";

export const handleAdd = () => ({
  type: ADD,
});

export const handleReduce = () => ({
  type: REDUCE,
});

export const handleTheme = (theme) => ({
  type: THEME,
  payload: theme, 
});
