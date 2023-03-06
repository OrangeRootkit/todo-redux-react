import { createStore, combineReducers } from "redux";
import { reducerTasks } from "./reducerTasks";
import { reducerInput } from "./reducerInput";

const rootReducer = combineReducers ({
  reducerTasks,
  reducerInput
})



export const store = createStore(rootReducer);
