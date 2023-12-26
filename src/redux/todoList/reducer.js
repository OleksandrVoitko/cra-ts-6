import { combineReducers } from "redux";
import { initialState } from "../initialState";

const taskReducer = (state = initialState.todoList.tasks, action) => {
  switch (action.type) {
    case "task/addTask":
      return [...state, action.payload];
    case "task/deleteTask":
      return state.filter((task) => task.id !== action.payload);

    case "task/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filterReducer = (state = initialState.todoList.filters, action) => {
  switch (action.type) {
    case "filter/setStatusFilter":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filterReducer,
});
