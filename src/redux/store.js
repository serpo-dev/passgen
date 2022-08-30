import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomSlice";


const store = configureStore({
    reducer: {
        random: randomReducer,
    },
});

export default store;