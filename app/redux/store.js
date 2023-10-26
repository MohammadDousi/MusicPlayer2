"use client";

import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import playlistSlice from "./features/playlistSlice";

export const store = configureStore({
  reducer: {
    playlistSlice : playlistSlice,
  },
});

// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// const store = createStore(rootReducer);
// export default store;
