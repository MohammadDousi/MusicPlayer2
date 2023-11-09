"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  play: false,
  trackPlay: null,
};

export const playlist = createSlice({
  name: "playlist",
  initialState,

  reducers: {
    play: (state, action) => {
      return {
        ...state,
        play: true,
        trackPlay: action.payload,
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
      if (state.trackPlay?.id != action.payload) {
        const newList = state.list.filter((item) => item.id !== action.payload);
        return {
          ...state,
          list: newList,
        };
      }
    },
  },
});

export const { play, pause, addPlaylist, removePlaylist, playNext } =
  playlist.actions;
export default playlist.reducer;
