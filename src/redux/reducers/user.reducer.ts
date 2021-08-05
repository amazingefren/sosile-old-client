import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userId: string,
  username: string
}

const initialState: UserState = {
  userId: "",
  username: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assign: (state, action) => {
      state.userId = action.payload.userId
      state.username = action.payload.username
    },
  },
});

export const {assign} = userSlice.actions

export default userSlice.reducer
