import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    signedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.signedIn = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.signedIn = false;
        }
    }
})
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer