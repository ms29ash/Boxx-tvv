import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'
import userReducer from '../features/user/userSlice'
import watchlistReducer from '../features/watchlist/watchlistSlice'
export const store = configureStore({
    reducer: {
        menu: menuReducer,
        user: userReducer,
        watchlist: watchlistReducer
    },
})