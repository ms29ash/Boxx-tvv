import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})
export const { setOpen } = userSlice.actions;

export default userSlice.reducer