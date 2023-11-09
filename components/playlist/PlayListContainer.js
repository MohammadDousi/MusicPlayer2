"use client";
import Playlist from "./Playlist";
import Player from "./Player";

import { useDispatch, useSelector } from "react-redux";
import { show } from "@/app/redux/features/showHidePlayerSlice";
import BackImage from "../backImage/BackImage";

export default function PlayListContainer() {
  const dispatch = useDispatch();
  let stateShow = useSelector((state) => state.showHidePlayerSlice);

  //   w-full md:w-1/5 h-full p-3 absolute flex flex-col justify-start items-start bg-slate-900 overflow-hidden z-10
  return (
    <>
      <div
        className={
          stateShow.toggleShowHidePlayer
            ? "w-full md:w-1/5 h-full p-3 absolute flex flex-col justify-start items-start bg-slate-900 overflow-hidden z-10"
            : "hidden"
        }
      >
        <Playlist />
        <Player />
        <section className="w-full h-12 flex justify-center items-center">
          <i
            onClick={() => {
              dispatch(show());
            }}
            className="fas fa-angle-double-down w-full p-1 text-center text-white/50 animate-bounce"
          ></i>
        </section>
      </div>

      <section className="w-full h-20 absolute bottom-0 left-0 bg-slate-800 flex flex-row justify-center items-center rounded-t-2xl overflow-hidden">
        
        <i
          onClick={() => {
            dispatch(show());
          }}
          className="fas fa-angle-double-up w-full p-1 text-center text-white/50 animate-bounce"
        ></i>
      </section>
    </>
  );
}
