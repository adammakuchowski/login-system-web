import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type AppState = ReturnType<typeof store.getState>

export default store
