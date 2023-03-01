import { createSlice } from "@reduxjs/toolkit";

const subRedditSlice = createSlice({
    name: "subReddit",
    initialState: {subReddit:{}},
    reducers: {
        setsubReddit:(state, action) => {
            const {subReddit} = action.payload;
            state.subReddit = subReddit;
        }
    }
})

export const selectsubReddit = (state) => state.subReddit.subReddit;
export const {setsubReddit} = subRedditSlice.actions;
export default subRedditSlice.reducer;