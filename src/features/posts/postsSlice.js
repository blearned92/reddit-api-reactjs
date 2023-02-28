import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {posts:[]},
    reducers: {
        setPosts:(state, action) => {
            const {posts} = action.payload;
            state.posts = posts;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const {setPosts} = postsSlice.actions;
export default postsSlice.reducer;