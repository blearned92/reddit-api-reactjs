import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feed: {
        articles: []
    }
}

const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        updateArticles:(state, action) => {
            const {articles} = action.payload;
            state.feed.articles = articles;
        }
    }
})

export const selectArticles = (state) => state.feed.feed.articles;
export const {updateArticles} = feedSlice.actions;
export default feedSlice.reducer;