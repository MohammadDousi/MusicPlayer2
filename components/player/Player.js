"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause } from "@/app/redux/features/playlistSlice";

export default function Player() {
  const [audio] = useState(new Audio());
  const [onPlay, setOnPlay] = useState([]);
  let dispatch = useDispatch();

  const state = useSelector((state) => state.playlistSlice);
  const isPlaying = state.play;
  let indexPlay = state.indexPlay;

  useEffect(() => {
    if (indexPlay != null) {
      setOnPlay(indexPlay);
      loadSong(indexPlay.name);
    } else {
      setOnPlay(state.list && state.list[state.list.length - 1]);
    }
  }, [onPlay, indexPlay]);

  const playBtnClick = () => {
    !isPlaying ? loadSong(onPlay?.name) : puaseSong();
  };

  const loadSong = (name) => {
    audio.src = `https://music.kaktusprog.ir/assets/file/song/${name}.mp3`;
    audio.load();
    playSong();
  };
  
  const playSong = () => {
    // if (currentTime) {
    //   audio.currentTime = currentTime;
    // }
    // audio.addEventListener("timeupdate", updateProgress);
    audio.play();
  };

  const puaseSong = () => {
    audio.pause();
    dispatch(pause());
  };

  return (
    <>
      <div className="w-full h-1/2 py-3 px-6 flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-slate-800 to-slate-800 rounded-2xl">
        <img
          src={onPlay?.cover}
          alt={onPlay?.cover}
          className="w-2/3 rounded-3xl object-cover"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-white/70 text-base">{onPlay?.name}</p>
          <p className="text-white/30 text-sm">{onPlay?.singer}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <i className="fa fa-repeat px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
          <i className="fa fa-backward-step px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
          <i
            className={
              !isPlaying
                ? "fa fa-circle-play px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
                : "fa fa-pause px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
            }
            onClick={() => playBtnClick()}
          ></i>
          <i className="fa fa-step-forward px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
          <i className="fa fa-shuffle px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
        </div>
        <div
          className="w-full h-1 relative rounded-full bg-cyan-800/80 flex flex-row flex-nowrap justify-start items-center cursor-pointer progrees-time-onplay"
          //   onClick={setProgresse}
          //   ref={widthProgreesTimeOnplay}
        >
          <span
            // style={{ width: `${widthProgreesTimePlay}%` }}
            className="w-1/2 absolute bg-cyan-500 rounded-full z-10 flex flex-row justify-start items-center cursor-pointer duration-300 progrees-time-play"
          ></span>

          <span
            className="w-3 h-3 rounded-full absolute cursor-pointer bg-cyan-500 z-20 duration-300"
            id="badge-time"
            // style={{ transform: `translateX(${badge}px)` }}
          ></span>
        </div>
      </div>
    </>
  );
}
