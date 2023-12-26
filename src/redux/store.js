import { createStore } from "redux";
import { rootReducer } from "./todoList/reducer";

export const store = createStore(rootReducer);
