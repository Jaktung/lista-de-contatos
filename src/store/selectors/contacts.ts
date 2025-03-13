import { RootReducer } from "..";

export const selectContacts = (state: RootReducer) => state.contacts;
export const selectFilters = (state: RootReducer) => state.filter;
