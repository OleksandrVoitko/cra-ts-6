import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { addTask, deleteTask, toggleCompleted } from "./actions";

export const tasksReducer = createReducer(
  initialState.todoList.tasks,
  (builder) => {
    builder
      .addCase(addTask, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTask, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload);
        state.splice(index, 1);
      })
      .addCase(toggleCompleted, (state, action) => {
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      });
  }
);
