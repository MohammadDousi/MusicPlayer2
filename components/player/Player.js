"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "@/app/redux/features/playlistSlice";

export default function Player() {
  const [audio] = useState(new Audio());
  const [onPlay, setOnPlay] = useState({});
  let dispatch = useDispatch();

  const state = useSelector((state) => state.playlistSlice);
  const [isPlaying, setIsPlaying] = useState(false);
  let indexPlay = state.indexPlay;

  useEffect(() => {
    setIsPlaying(state.play);
    if (indexPlay != null) {
      setOnPlay(indexPlay);
      loadSong(indexPlay.name);
    } else {
      setOnPlay(state.list && state.list[state.list.length - 1]);
    }
  }, [onPlay, indexPlay]);

  const playHandler = () => {
    if (!isPlaying) {
      loadSong(onPlay?.name);
      setIsPlaying(true);
    } else {
      puaseSong();
      setIsPlaying(false);
    }
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

  const parevantHandler = () => {
    let newIndex = state.list.map((x) => x.id).indexOf(onPlay?.id);
    newIndex--;
    if (newIndex < 0) {
      newIndex = state.list.length - 1;
    }
    let newTrack = state.list[newIndex];
    dispatch(play(newTrack));
  };

  const forwardHandler = () => {
    let newIndex = state.list.map((x) => x.id).indexOf(onPlay?.id);
    newIndex++;
    if (newIndex >= state.list.length) {
      newIndex = 0;
    }
    let newTrack = state.list[newIndex];
    dispatch(play(newTrack));
  };

  return (
    <>
      {audio?.addEventListener("ended", forwardHandler)}
      <div className="w-full relative h-3/5 py-3 px-6 flex flex-col justify-around items-center bg-gradient-to-r from-slate-800 to-slate-800 rounded-2xl overflow-hidden">
        <img
          src={onPlay?.cover}
          alt={onPlay?.cover}
          className="w-full h-full z-0 absolute blur-3xl opacity-60 backdrop-blur-xl rounded-3xl object-cover"
        />

        <div className="w-full flex flex-col justify-center items-center z-10">
          <img
            src={onPlay?.cover}
            alt={onPlay?.cover}
            className="w-full mb-3 rounded-3xl shadow-2xl object-cover z-10"
          />
          <p className="text-white/70 text-base">{onPlay?.name}</p>
          <p className="text-white/30 text-sm">{onPlay?.singer}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center z-10">
          <i className="fa fa-repeat px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
          <i
            onClick={() => parevantHandler()}
            className="fa fa-backward-step px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"
          ></i>
          <i
            className={
              !isPlaying
                ? "fa fa-circle-play px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
                : "fa fa-pause px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
            }
            onClick={() => playHandler()}
          ></i>
          <i
            onClick={() => forwardHandler()}
            className="fa fa-step-forward px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"
          ></i>
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
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-xs text-white/70">6:58</p>
          <p className="text-xs text-white/70">6:58</p>
        </div>

      </div>
    </>
  );
}
