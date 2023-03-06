import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {posts:[], currentPost:{}, postFilter:"hot"},
    reducers: {
        setPosts:(state, action) => {
            const {posts} = action.payload;
            state.posts = posts;
        },
        setCurrentPost:(state, action)=>{
            const {post} = action.payload;
            state.currentPost = post;
        },
        setPostFilter:(state, action) => {
            const {postFilter} = action.payload;
            state.postFilter = postFilter;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectPost = (state) => state.posts.currentPost;
export const selectPostFilter = (state) => state.posts.postFilter;
export const {setPosts, setCurrentPost, setPostFilter} = postsSlice.actions;
export default postsSlice.reducer;