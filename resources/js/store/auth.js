import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    }
  }
});

export default slice.reducer;

export const isAuthSelector = state => state.auth.user !== null;

export function login(email, password) {
  return async function(dispatch) {
    const response = await axios.post(`/api/login`, { email, password });
    const user = response.data;
    dispatch(slice.actions.setUser(user));
  }
}

export function logout() {
    return async function(dispatch) {
      await axios.delete(`/api/logout`);
      dispatch(slice.actions.setUser(null));
    }
}

export function setCurrentUser() {
    return async function(dispatch) {
        dispatch(slice.actions.setUser(window.currentUser));
    }
}