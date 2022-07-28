import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { User } from 'models/User';
import { RootState } from 'redux/store';

export interface LoginPayload{
  email: string;
  password: string;
}
export interface RegisterPayload{
  email: string;
  password: string;
  username: string;
  confirm: string;
}
export interface AuthState {
    user: User | null;
    token: String | null;
  }
export interface RegisterSuccess {
  result: String | null;
  }
  const initialState: AuthState = {
    user: null,
    token: null,
  };
  
  export const login = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
    const data = await authApi.login(payload);    
    return data.results;
  });
  export const register = createAsyncThunk('auth/register', async (payload: RegisterPayload) => {
    const data = await authApi.register(payload);        
    return data.results;
  });

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout(state) {
        state.user=null
        document.cookie = "token=";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, action) => {
          state.user = action.payload.user;
          // state.token = action.payload.token;
          document.cookie = `token=${action.payload.token as any}`;
          // localStorage.setItem('token', action.payload.token as string);
        }).addCase(login.rejected, (state, action) => {
        state.user = null;
        // state.token = null;
      });
    },
  });

  // Actions
export const authActions = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;