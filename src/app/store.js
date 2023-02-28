import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import feedReducer from "../features/feed/feedSlice"

export default configureStore({
    reducer: {
        search: searchReducer,
        feed: feedReducer
    }
})