import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: {
        searchTerm: "",
        subReddit: "",
        potentialSubReddits: []
    }
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setTerm:(state, action) => {
            const {term} = action.payload;
            if(!term){
                state.search.searchTerm = term;
                state.search.potentialSubReddits = [];
            }
            state.search.searchTerm = term;
        },
        setSubReddit: (state, action) => {
            const {subReddit} = action.payload;
            state.search.subReddit = subReddit;
        },
        setPotentialSubReddits: (state, action) => {
            const {potentialSubReddits} = action.payload;
            state.search.potentialSubReddits = potentialSubReddits;
        },
        resetState: (state, action) => {
            state.search = {
                searchTerm: "",
                subReddit: "/r/finalfantasy/",
                potentialSubReddits: []
            };
        }
    }
})

export const selectTerm = (state) => state.search.search.searchTerm;
export const selectSubReddit = (state) => state.search.search.subReddit;
export const selectPotentialSubReddits = (state) => state.search.search.potentialSubReddits;
export const {setTerm, setSubReddit, setPotentialSubReddits, resetState} = searchSlice.actions;
export default searchSlice.reducer;