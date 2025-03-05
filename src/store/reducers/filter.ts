import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/ContactPriority";

type FilterState = {
    term?: string;
    criterion: "prioridade" | "todas";
    value?: enums.ContactPriority;
};

const initialState: FilterState = {
    term: "",
    criterion: "todas",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        },
        changeFilter: (state, action: PayloadAction<FilterState>) => {
            state.criterion = action.payload.criterion;
            state.value = action.payload.value;
        },
    },
});

export const { changeTerm, changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
