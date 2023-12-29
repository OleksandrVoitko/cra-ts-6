import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { addContact, deleteContact, setFilter } from "./actions";

export const contactsReducer = createReducer(
  initialState.phoneBook.contacts,
  (builder) => {
    builder
      .addCase(addContact, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        const index = state.findIndex(
          (contact) => contact.id === action.payload
        );
        state.splice(index, 1);
      });
  }
);

export const filterContactsReducer = createReducer(
  initialState.phoneBook.filter,
  (builder) => {
    builder.addCase(setFilter, (state, action) => (state = action.payload));
  }
);
