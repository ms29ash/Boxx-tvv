import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourite: []
}


export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favourite.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.favourite.splice(action.payload, 1);
        }
    }
})

export const { addToFavorite, removeFromFavorite } = favouriteSlice.actions;

export default favouriteSlice.reducer