import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";
import * as enums from "../../utils/enums/ContactPriority";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [
        new Contact(
            "Maria",
            "maria@gmail.com",
            999999999,
            enums.ContactPriority.FAVORITE,
            1
        ),
        new Contact(
            "Joao",
            "joao@gmail.com",
            999999999,
            enums.ContactPriority.NORMAL,
            2
        ),
        new Contact(
            "José",
            "jose@gmail.com",
            999999999,
            enums.ContactPriority.NORMAL,
            3
        ),
        new Contact(
            "Lara",
            "lara@gmail.com",
            999999999,
            enums.ContactPriority.NORMAL,
            4
        ),
    ],
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state = state.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { remove } = contactsSlice.actions;

export default contactsSlice.reducer;
