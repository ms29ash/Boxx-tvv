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
        }
    }
})
export const { addUser } = userSlice.actions;

export default userSlice.reducer