import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {posts:[], currentPost:{}},
    reducers: {
        setPosts:(state, action) => {
            const {posts} = action.payload;
            state.posts = posts;
        },
        setCurrentPost:(state, action)=>{
            const {post} = action.payload;
            state.currentPost = post;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectPost = (state) => state.posts.currentPost;
export const {setPosts, setCurrentPost} = postsSlice.actions;
export default postsSlice.reducer;