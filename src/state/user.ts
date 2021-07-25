import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      userId: Number,
      username: String
    },
  },
  reducers: {
    assign: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {assign} = userSlice.actions

export default userSlice.reducer
