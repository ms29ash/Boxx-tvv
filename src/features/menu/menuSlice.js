import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setOpen: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})
export const { setOpen } = menuSlice.actions;

export default menuSlice.reducer