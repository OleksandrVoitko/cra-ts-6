import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterContactsReducer } from "./phoneBook/reducer";
import { filterReducer } from "./todoList/reducerFilter";
import { tasksReducer } from "./todoList/reducerTasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
    contacts: contactsReducer,
    filterContacts: filterContactsReducer,
  },
});
