// In reducer.js

import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../static/data";

const userSlice = createSlice({
  name: "users",
  initialState: Users,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
