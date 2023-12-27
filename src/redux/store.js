import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./todoList/reducerFilter";
import { tasksReducer } from "./todoList/reducerTasks";

export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filterReducer },
});
