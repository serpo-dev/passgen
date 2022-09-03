import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionarySlice";
import optionsReducer from "./optionsSlice";
import resultReducer from './resultSlice';


const store = configureStore({
    reducer: {
        options: optionsReducer,
        dictionary: dictionaryReducer,
        result: resultReducer,
    },
});

export default store;