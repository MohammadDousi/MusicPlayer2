"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleShowHidePlayer: false,
};

export const showHide = createSlice({
  name: "showHide",
  initialState,

  reducers: {
    show: (state) => {
      return { toggleShowHidePlayer: !state.toggleShowHidePlayer };
    },
  },
});

export const { show } = showHide.actions;
export default showHide.reducer;
