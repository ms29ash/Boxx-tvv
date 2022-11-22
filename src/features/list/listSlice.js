import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../user/userSlice";
import axios from '../../axios'
import Cookies from 'universal-cookie'

//Cookies
const cookies = new Cookies();
const token = cookies.get('token')

//initial state
const initialState = {
    watchLater: [],
    favorites: [],
    loading: false,
}

//Add to favorites
export const addToListFav = createAsyncThunk('list/addToFav',

    async ({ type, id }) => {

        let res = await axios.post('addToList/favorites', { token: token, item: { type, id } });
        return res.data.item;


    }
)
//Add to Watchlater
export const addToListWatch = createAsyncThunk('list/addToWatch',

    async ({ type, id }) => {
        let res = await axios.post('addToList/watchlater', { token: token, item: { type, id } });
        return res.data.item;


    }
)

//Remove from favorites
export const removeFromListFav = createAsyncThunk('list/removeFromFav',

    async (id) => {
        await axios.put('removefromList/favorites', { token: token, id: id })
        return id;

    }
)
//Remove from watchlater
export const removeFromListWatch = createAsyncThunk('list/removeFromWatch',

    async (id) => {
        await axios.put('removefromList/watchlater', { token: token, id: id })
        return id;

    }
)


export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addToWatchLater: (state, action) => {
            state.watchLater.push(action.payload);
        },
        removerFomWatchLater: (state, action) => {
            state.watchLater.splice(action.payload, 1);
        },
        addToFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.favorites.splice(action.payload, 1);
        }
    },
    extraReducers: (builder) => {
        //for Getuser
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const { watchlater, favorites } = action.payload;
            state.watchLater = watchlater;
            state.favorites = favorites;
        })
        //for add to favorites
        builder.addCase(addToListFav.fulfilled, (state, action) => {
            state.favorites.push(action.payload);
            state.loading = false;
        }).addCase(addToListFav.pending, (state) => {
            state.loading = true;
        }).addCase(addToListFav.rejected, (state, action) => {
            state.loading = false;
        })
        //for add to watchlater
        builder.addCase(addToListWatch.fulfilled, (state, action) => {
            state.watchLater.push(action.payload);
            state.loading = false;
        }).addCase(addToListWatch.pending, (state) => {
            state.loading = true;
        }).addCase(addToListWatch.rejected, (state) => {
            state.loading = false;
        })
        //for Remove from favorites
        builder.addCase(removeFromListFav.fulfilled, (state, action) => {
            state.favorites.splice(action.payload, 1);
            state.loading = false;
        }).addCase(removeFromListFav.pending, (state) => {
            state.loading = true;
        }).addCase(removeFromListFav.rejected, (state) => {
            state.loading = false;
        })
        //for remove from watchlater
        builder.addCase(removeFromListWatch.fulfilled, (state, action) => {
            state.watchLater.splice(action.payload, 1);
            state.loading = false;
        }).addCase(removeFromListWatch.pending, (state) => {
            state.loading = true;
        }).addCase(removeFromListWatch.rejected, (state) => {
            state.loading = false;
        })
    }

})




export const { addToWatchLater, removeFromWatchLater, addToFavorite, removeFromFavorite } = listSlice.actions;


export default listSlice.reducer