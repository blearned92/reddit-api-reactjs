import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import postsReducer from "../components/Posts/postsSlice";
import trendingReducer from "../components/Trending/trendingSlice";
import subRedditReducer from "../components/SubReddit/subRedditSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        posts: postsReducer,
        trending: trendingReducer,
        subReddit: subRedditReducer
    }
})