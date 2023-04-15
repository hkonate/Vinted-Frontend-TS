import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState } from "./Types";
const storageUser = localStorage.getItem("user");
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: storageUser ? JSON.parse(storageUser) : null,
  } as UserInitialState,
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      if (action.payload.user) {
        const userInfos = action.payload.user.toString();
      }
    },
    Logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});
export const { Login, Logout } = userSlice.actions;

export default userSlice.reducer;
