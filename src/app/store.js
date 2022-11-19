import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'
import userReducer from '../features/user/userSlice'
import listReducer from '../features/list/listSlice'
export const store = configureStore({
    reducer: {
        menu: menuReducer,
        user: userReducer,
        list: listReducer,
    },
})