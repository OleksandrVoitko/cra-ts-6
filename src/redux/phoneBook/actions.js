import { nanoid } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/addContact", (name, phone) => {
  return {
    payload: {
      id: nanoid(),
      name,
      phone,
    },
  };
});

export const deleteContact = createAction("contact/deleteContact");

export const setFilter = createAction("filter/setFilter");
