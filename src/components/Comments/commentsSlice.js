import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {comments: []},
    reducers: {
        setComments: (state, action) => {
            const {comments} = action.payload;
            state.comments = comments;
        }
    }
})

export const selectComments = (state) => state.comments.comments;
export const {setComments} = commentsSlice.actions;
export default commentsSlice.reducer;