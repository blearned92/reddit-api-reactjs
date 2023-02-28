import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trending: []
}

const trendingSlice = createSlice({
    name: "trending",
    initialState: {trending:[]},
    reducers: {
        setTrending:(state, action) => {
            const {trending} = action.payload;
            state.trending = trending;
        }
    }
})

export const selectTrending = (state) => state.trending.trending;
export const {setTrending} = trendingSlice.actions;
export default trendingSlice.reducer;