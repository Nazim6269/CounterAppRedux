import { createStore } from "redux";
import { counterReducer } from "./reducer/counterReducer";

export const store = createStore(counterReducer);
