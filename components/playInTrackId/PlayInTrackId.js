"use client";

import { useDispatch } from "react-redux";
import { addPlaylist, play } from "@/app/redux/features/playlistSlice";

export default function PlayInTrackId({ track }) {
  const dispatch = useDispatch();

  return (
    <section className="w-full flex flex-row justify-center items-center gap-4">
      <i
        onClick={() => {
          dispatch(addPlaylist(track));
          dispatch(play(track));
        }}
        className="fa fa-play-circle text-6xl text-white hover:scale-110 duration-300 cursor-pointer"
      ></i>
      <i className="fa fa-heart w-9 h-9 text-sm text-white bg-white/20 hover:scale-110 duration-300 shadow-xl rounded-full flex justify-center items-center cursor-pointer"></i>
      <i className="fa fa-download w-9 h-9 text-sm  text-white bg-white/20 hover:scale-110 duration-300 shadow-xl rounded-full flex justify-center items-center cursor-pointer"></i>
      <i className="fa fa-share-alt w-9 h-9 text-sm  text-white bg-white/20 hover:scale-110 duration-300 shadow-xl rounded-full flex justify-center items-center cursor-pointer"></i>
    </section>
  );
}
