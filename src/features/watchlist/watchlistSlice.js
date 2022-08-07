import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchlist: [],
}




export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlist.push(action.payload);
        },
        removefromWatchlist: (state, action) => {
            state.watchlist.splice(action.payload, 1);
        },
    }
})
export const { addToWatchlist, removefromWatchlist } = watchlistSlice.actions;


export default watchlistSlice.reducer