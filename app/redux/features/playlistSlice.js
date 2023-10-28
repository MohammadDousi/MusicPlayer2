"use client";

import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";

const initialState = {
  list: [],
  play: false,
  indexPlay: null,
  removeItem: null,
};

export const playlist = createSlice({
  name: "playlist",
  initialState,

  reducers: {
    play: (state, action) => {
      return {
        ...state,
        play: true,
        indexPlay: action.payload,
      };
    },
    pause: (state) => {
      return {
        ...state,
        play: false,
      };
    },
    addPlaylist: (state, action) => {
      const foundTrack = state.list.find((x) => x.id === action.payload.id);
      if (!foundTrack) {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      }
    },
    removePlaylist: (state, action) => {
      if (state.indexPlay?.id != action.payload) {
        const newList = state.list.filter((item) => item.id !== action.payload);
        return {
          ...state,
          removeItem: "nooooo",
          list: newList,
        };
        F;
      }
    },
    playNext: (state) => {},
  },
});

export const { play, pause, addPlaylist, removePlaylist, playNext } =
  playlist.actions;
export default playlist.reducer;
