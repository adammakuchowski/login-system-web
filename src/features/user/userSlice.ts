import axios, {Canceler} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {AppState} from '../../app/store'

export interface UserState {
  loginUserStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  loginUserError?: string;
  token?: string;
}

const initialState: UserState = {
  loginUserStatus: 'idle',
}

interface LoginUserData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk('auth/login', async (loginUserData: LoginUserData) => {
  try {
    let cancel: Canceler
    const response = await axios.post(
      'http://localhost:1337/auth/login',
      loginUserData,
      {cancelToken: new axios.CancelToken(c => cancel = c)}
    )

    return response.data
  } catch (error: any) {
    console.error('[loginUser]:', error.message)
    throw error
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginUserStatus = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserStatus = 'succeeded'

        console.log('action.payload', action.payload)

        state.token = action.payload


      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserStatus = 'failed'
        state.loginUserError = action.error.message
      })
  }
})

export const getLoginUserStatus = (state: AppState) => state.user.loginUserStatus

export default userSlice.reducer
