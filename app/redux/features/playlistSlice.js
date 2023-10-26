"use client";

import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";
import { useState } from "react";

const initialState = {
  list: [],
  play: false,
};

export const playlist = createSlice({
  name: "playlist",
  initialState,

  reducers: {
    play: (state) => {
      return {
        ...state,
        play: true,
      };
    },
    pause: (state) => {
      return {
        ...state,
        play: false,
      };
    },
    addPlaylist: (state, action) => {
      const foundSong = state.list.find((x) => x.id === action.payload.id);
      if (!foundSong) {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      }
    },
    removePlaylist: (state) => {},
    playNext: (state) => {},
  },
});

export const { play, pause, addPlaylist, removePlaylist, playNext } =
  playlist.actions;
export default playlist.reducer;
