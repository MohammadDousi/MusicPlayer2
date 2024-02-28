"use client";
import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";

export const store = configureStore({
  reducer: {
    playlistSlice: playlistSlice,
  },
});
