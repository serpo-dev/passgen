import { createSlice } from '@reduxjs/toolkit';
import array from '../data/dictionary.json';

const initialState = {
    numbers: array[0].numbers,
    english: array[0].english,
    cyrillic: array[0].cyrillic,
    japanese: array[0].japanese,
    special: array[0].special,
};

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {},
});

export const {} = dictionarySlice.actions;

export default dictionarySlice.reducer;
