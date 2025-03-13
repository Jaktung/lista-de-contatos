import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/ContactPriority";
import Contact from "../../models/Contact";

const initialState = {
    items: [
        {
            name: "Maria",
            email: "maria@gmail.com",
            number: 999999999,
            description: "Esta me devendo dinheiro",
            priority: enums.ContactPriority.FAVORITE,
            id: 1,
        },
        {
            name: "João",
            email: "joao@gmail.com",
            number: 999999999,
            description: "Primo",
            priority: enums.ContactPriority.NORMAL,
            id: 2,
        },
        {
            name: "José",
            email: "jose@gmail.com",
            number: 999999999,
            description: "Filho do meu patrão, ficou de me pagar",
            priority: enums.ContactPriority.NORMAL,
            id: 3,
        },
        {
            name: "Lara",
            email: "lara@gmail.com",
            number: 999999999,
            description: "Academia 8h",
            priority: enums.ContactPriority.NORMAL,
            id: 4,
        },
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
        edit: (state, action: PayloadAction<Contact>) => {
            const contactIndex = state.items.findIndex(
                (c) => c.id === action.payload.id
            );

            if (contactIndex >= 0) {
                state.items[contactIndex] = action.payload;
            }
        },
        addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
            const contactAlreadyExists = state.items.find(
                (i) => i.number === action.payload.number
            );

            if (contactAlreadyExists) {
                alert("Já existe um contato com esse número");
            } else {
                const lastTask = state.items[state.items.length - 1];

                const newTask = {
                    ...action.payload,
                    id: lastTask ? lastTask.id + 1 : 1,
                };
                state.items.push(newTask);
            }
        },
    },
});

export const { remove, edit, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
