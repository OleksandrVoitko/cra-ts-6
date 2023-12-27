import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { setStatusFilter } from "./actions";

export const filterReducer = createReducer(
  initialState.todoList.filters,
  (builder) => {
    builder.addCase(setStatusFilter, (state, action) => {
      state.status = action.payload;
    });
  }
);
