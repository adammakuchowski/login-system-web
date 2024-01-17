import axios, {Canceler} from 'axios'

import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import {AppState} from '../../app/store'
import {
  LoginUserData,
  UserState
} from './types'

export const loginUser = createAsyncThunk('auth/login', async (loginUserData: LoginUserData) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let cancel: Canceler
    const response = await axios.post(
      'http://localhost:1337/auth/login',
      loginUserData,
      {cancelToken: new axios.CancelToken(c => { cancel = c })}
    )

    return response.data
  } catch (error: any) {
    console.error('[loginUser]:', error.message)
    throw error
  }
})

export const verifyToken = createAsyncThunk('auth/verify', async (token: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let cancel: Canceler
    const response = await axios.get(
      'http://localhost:1337/auth/verify',
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        cancelToken: new axios.CancelToken(c => { cancel = c })
      }
    )

    return response.status
  } catch (error: any) {
    console.error('[verifyToken]:', error.message)
    throw error
  }
})

const initialState: UserState = {
  loginUserStatus: 'idle',
  verifyTokenStatus: 'idle'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginUserStatus = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserStatus = 'succeeded'
        sessionStorage.setItem('token', action.payload.token as string)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserStatus = 'failed'
        state.loginUserError = action.error.message
      })
      .addCase(verifyToken.pending, (state) => {
        state.verifyTokenStatus = 'loading'
      })
      .addCase(verifyToken.fulfilled, (state) => {
        state.verifyTokenStatus = 'succeeded'
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.verifyTokenStatus = 'failed'
        state.verifyTokenError = action.error.message
      })
  }
})

export const getLoginUserStatus = (state: AppState): string => state.user.loginUserStatus
export const getVerifyTokenStatus = (state: AppState): string => state.user.verifyTokenStatus

export default userSlice.reducer
