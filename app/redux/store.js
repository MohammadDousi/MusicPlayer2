"use client";

import { configureStore } from "@reduxjs/toolkit";

import playlistSlice from "./features/playlistSlice";
import showHidePlayerSlice from "./features/showHidePlayerSlice";

export const store = configureStore({
  reducer: {
    playlistSlice : playlistSlice,
    showHidePlayerSlice : showHidePlayerSlice ,
  },
});
