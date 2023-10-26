"use client";

import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";
import { useState } from "react";

const initialState = {
  list: [],
};

export const playlist = createSlice({
  name: "playlist",
  initialState,

  reducers: {
    addPlaylist: (state, action) => {
      return {
        list: [...state.list, action.payload],
      };
    },
    removePlaylist: (state) => {},
    playNext: (state) => {},
  },
});

export const { addPlaylist, removePlaylist, playNext } = playlist.actions;
export default playlist.reducer;
