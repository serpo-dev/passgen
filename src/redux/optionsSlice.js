import { createSlice } from '@reduxjs/toolkit/';

const initialState = {
    numbers: true,
    english: true,
    cyrillic: false,
    japanese: false,
    special: true,
    amount: 10,
    length: 25,
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        cN: (state, action) => {
            state.numbers = action.payload;
        },
        cE: (state, action) => {
            state.english = action.payload;
        },
        cC: (state, action) => {
            state.cyrillic = action.payload;
        },
        cJ: (state, action) => {
            state.japanese = action.payload;
        },
        cS: (state, action) => {
            state.special = action.payload;
        },
        cAmount: (state, action) => {
            state.amount = action.payload;
        },
        cLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const { cN, cE, cC, cJ, cS, cAmount, cLength } = optionsSlice.actions;

export default optionsSlice.reducer;
