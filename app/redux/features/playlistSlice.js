"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  play: false,
  indexPlay: null,
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

      // return {
      //   ...state,
      //   play: true,
      // };
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
    removePlaylist: (state) => {},
    playNext: (state) => {},
  },
});

export const { play, pause, addPlaylist, removePlaylist, playNext } =
  playlist.actions;
export default playlist.reducer;
