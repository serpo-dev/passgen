import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    tasks: [
        {
            until: '22 May 2023 18:00',
            title: 'Become a senior JS developer',
            text: 'work hard everyday',
            done: false,
        },
        {
            until: '1 January 2022 00:00',
            title: 'Congratulate',
            text: 'the year of tiger',
            done: false,
        },
    ],
};

export const randomSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            state.tasks.push({
                until: action.payload.until,
                title: action.payload.title,
                text: action.payload.text,
                done: action.payload.done,
            });
        },
        remove: (state, action) => {
            const pos = action.payload.num;
            state.tasks.splice(pos, 1);
        },
    },
});

export const { add, remove } = randomSlice.actions;

export default randomSlice.reducer;