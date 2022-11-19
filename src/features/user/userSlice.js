import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";
import axios from '../../axios'


const initialState = {
    user: null,
    signedIn: false,
}



export const fetchUser = createAsyncThunk('list/fetchUser', async (token, thunkAPI) => {
    const response = await axios.post('/auth/user', { token: token });
    return response.data.user;


})




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
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const { username, email } = action.payload
            state.signedIn = true;
            state.user = { username, email }

        })
    }
})
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer