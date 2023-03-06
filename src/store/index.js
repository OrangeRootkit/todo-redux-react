import { createStore, combineReducers } from "redux";
import { reducerTasks } from "./reducerTasks";

const rootReducer = combineReducers ({
  reducerTasks,
})



export const store = createStore(rootReducer);
