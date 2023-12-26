import { nanoid } from "@reduxjs/toolkit";

export const addTask = (text) => ({
  type: "task/addTask",
  payload: { id: nanoid(), completed: false, text },
});

export const deleteTask = (taskId) => ({
  type: "task/deleteTask",
  payload: taskId,
});

export const toggleCompleted = (taskId) => ({
  type: "task/toggleCompleted",
  payload: taskId,
});

export const setStatusFilter = (value) => ({
  type: "filter/setStatusFilter",
  payload: value,
});
