import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.token = action.payload;
        }
    }
})
export const { addUser } = userSlice.actions;

export default userSlice.reducer