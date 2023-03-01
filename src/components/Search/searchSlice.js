import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {searchResults: []},
    reducers: {
        setSearchResults: (state, action) => {
            const {searchResults} = action.payload;
            state.searchResults = searchResults;
        }
    }
})

export const selectSearchResults = (state) => state.search.searchResults;
export const {setSearchResults} = searchSlice.actions;
export default searchSlice.reducer;