import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import postsReducer from "../features/posts/postsSlice";
import trendingReducer from "../components/Trending/trendingSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        posts: postsReducer,
        trending: trendingReducer
    }
})