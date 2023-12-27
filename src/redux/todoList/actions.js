import { nanoid } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("task/addTask", (text) => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

export const deleteTask = createAction("task/deleteTask");

export const toggleCompleted = createAction("task/toggleCompleted");

export const setStatusFilter = createAction("filter/setStatusFilter");
