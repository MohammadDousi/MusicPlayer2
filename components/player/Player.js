'use client';

import React from "react";
import Image from "next/image";
import { useState } from "react";
import cover from "../../public/image/coverSongs/cover17.jpg";

export default function Player() {
  

  // const [audio] = useState(new Audio());
  // const audio = new Audio();
  const [isPlaying, setIsPlaying] = useState(true);

  const playBtnClick = (event) => {
    // event.preventDefault();

    if (isPlaying) {
      loadSong();
    } else {
      puaseSong();
    }
  };

  const loadSong = () => {
    audio.src = "";
    audio.src =
      "https://music.kaktusprog.ir/assets/file/song/save your tears.mp3";
    audio.load();
    playSong();
  };

  const playSong = () => {
    // if (currentTime) {
    //   audio.currentTime = currentTime;
    // }
    // audio.addEventListener("timeupdate", updateProgress);
    audio.play();
    setIsPlaying(false);
  };

  const puaseSong = () => {
    audio.pause();
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-1/2 py-3 px-6 flex flex-col justify-center items-center gap-6 bg-gradient-to-r from-transparent to-cyan-900 rounded-2xl">
      <Image
        src={cover}
        alt="cover.jpg"
        className="w-2/3 rounded-3xl object-cover"
        quality={100}
        placeholder="blur"
      />
      {/* <img
        src="image/coverSongs/cover.jpg"
        alt="cover.jpg"
        className="w-2/3 rounded-3xl object-cover"
      /> */}
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-white/70 text-base">Tulsa Jesus Freak</p>
        <p className="text-white/30 text-sm">Lana del Ray</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <i className="fa fa-repeat px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
        <i className="fa fa-backward-step px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
        <i
          className={
            isPlaying
              ? "fa fa-circle-play px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
              : "fa fa-pause px-2 text-white/70 hover:text-white text-3xl cursor-pointer duration-300"
          }
          onClick={(e) => playBtnClick()}
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
  );
}
