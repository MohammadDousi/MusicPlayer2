"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "@/app/redux/features/playlistSlice";

export default function MiniPlayer() {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio());
  }, []);

  // const [audio] = useState(new Audio());
  const [track, setTrack] = useState({});

  const [widthProgreesTimePlay, setWidthProgreesTimePlay] = useState(0);
  const [badge, setBadge] = useState(0);
  const [timePlay, setTimePlay] = useState("");
  const [allTimeMusic, setAllTimeMusic] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const widthProgreesTimeOnplay = useRef("");

  let dispatch = useDispatch();

  const state = useSelector((state) => state.playlistSlice);
  let trackPlay = state.trackPlay;
  const defaultTrack = state.list && state.list[state.list.length - 1];

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    !trackPlay && setTrack(defaultTrack);
  }, [defaultTrack]);

  useEffect(() => {
    setIsPlaying(state.play);
    if (trackPlay) {
      console.log("bye");
      setTrack(trackPlay);
      loadSong(trackPlay.name);
    }
  }, [trackPlay]);

  const playHandler = () => {
    if (!isPlaying) {
      loadSong(track?.name);
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
    if (currentTime) {
      audio.currentTime = currentTime;
    }
    audio.addEventListener("timeupdate", updateProgress);
    audio.play();
  };

  const puaseSong = () => {
    audio.pause();
    dispatch(pause());
  };

  const backwardHandler = () => {
    let newIndex = state.list.map((x) => x.id).indexOf(track?.id);
    newIndex--;
    if (newIndex < 0) {
      newIndex = state.list.length - 1;
    }
    let newTrack = state.list[newIndex];
    dispatch(play(newTrack));
  };

  const forwardHandler = () => {
    let newIndex = state.list.map((x) => x.id).indexOf(track?.id);
    newIndex++;
    if (newIndex >= state.list.length) {
      newIndex = 0;
    }
    let newTrack = state.list[newIndex];
    dispatch(play(newTrack));
  };
  const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;

    setWidthProgreesTimePlay(progressPercent);

    const widthOnPlay = widthProgreesTimeOnplay.current.clientWidth;

    let badge = (currentTime / duration) * widthOnPlay - 10;

    if (badge) {
      setBadge(badge);
    }

    var cur_time = Math.floor(currentTime);
    let timePlay;
    if (cur_time < 59) {
      if (cur_time < 10) {
        timePlay = "0:0" + cur_time;
      } else {
        timePlay = "0:" + cur_time;
      }
    } else {
      var min = Math.floor(currentTime / 60);
      var secend = Math.floor(currentTime - min * 60);
      if (secend < 10) {
        secend = "0" + secend;
      }

      timePlay = min + ":" + secend;
    }

    setTimePlay(timePlay);

    var min_dur = Math.floor(duration % 60);
    if (min_dur < 10) {
      min_dur = "0" + min_dur;
    }
    let allTime = Math.floor(duration / 60) + ":" + min_dur;
    setAllTimeMusic(allTime);
  };
  const setProgresse = (e) => {
    const width = widthProgreesTimeOnplay.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audio.duration;

    function example() {
      return duration ? (audio.currentTime = (clickX / width) * duration) : "";
    }
    example();
  };

  return (
    <>
      {audio?.addEventListener("ended", forwardHandler)}
      <div
        // className={
        //   openList === "mini"
        //     ? "w-96 h-16 py-1 absolute right-3 bottom-3 z-30 px-5 bg-primeryBackDarker flex flex-row justify-start items-center gap-4 rounded-xl duration-300 delay-300 translate-y-0"
        //     : "w-96 h-16 py-1 absolute right-3 bottom-0 z-30 px-5 bg-primeryBackDarker flex flex-row justify-start items-center gap-4 rounded-xl duration-300 delay-0 overflow-hidden translate-y-full"
        // }

        className="w-96 h-16 px-5 py-10 absolute right-3 bottom-3 z-30 bg-primeryBackDarker shadow-2xl shadow-textColor/5 flex flex-row justify-center items-center gap-4 rounded-2xl duration-300 delay-300 translate-y-0"
      >
        <Image
          src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
          alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
          className="size-12 rounded-xl shadow-2xl object-cover ring-1 ring-textColor/20 ring-offset-4 ring-offset-primeryBackDarker"
          width={500}
          height={500}
          quality={100}
        />

        <div className="w-full flex flex-col justify-center items-center">
          <p className="w-full text-left text-textColor/80 text-base font-bold capitalize tracking-wide">
            {track?.name?.length > 20
              ? `${track?.name?.slice(0, 18)}...`
              : track?.name}
          </p>
          <p className="w-full text-left text-textColor/50 text-sm font-normal capitalize tracking-wide">
            {track?.singer}
          </p>
        </div>

        <div className=" pr-2 pb-1 flex flex-col justify-center items-center gap-2">
          <div className="w-full flex flex-row justify-center items-center gap-6">
            <i
              onClick={() => backwardHandler()}
              className="fa fa-backward-step text-textColor/50 hover:text-primeryColor text-base cursor-pointer duration-300"
            ></i>
            <i
              className={
                !isPlaying
                  ? "fa fa-circle-play text-textColor/50 hover:text-primeryColor text-2xl cursor-pointer duration-300"
                  : "fa fa-pause text-textColor/50 hover:text-primeryColor text-2xl cursor-pointer duration-300"
              }
              onClick={() => playHandler()}
            ></i>
            <i
              onClick={() => forwardHandler()}
              className="fa fa-step-forward text-textColor/50 hover:text-primeryColor text-base cursor-pointer duration-300"
            ></i>
          </div>

          <div
            className="w-full h-1 relative rounded-full bg-textColor/10 flex flex-row flex-nowrap justify-start items-center cursor-pointer"
            onClick={setProgresse}
            ref={widthProgreesTimeOnplay}
          >
            <span
              style={{ width: `${widthProgreesTimePlay}%` }}
              className="absolute h-1 bg-textColor/80 rounded-full z-10 flex flex-row justify-start items-center cursor-pointer duration-300"
            ></span>

            {/* <span
              className="w-1.5 h-1.5 rounded-full absolute cursor-pointer bg-primeryColor z-20 duration-300"
              style={{ transform: `translateX(${badge}px)` }}
            ></span> */}
          </div>
        </div>
        {/* <div className="w-full flex flex-row justify-between items-center">
          <p className="text-xs text-texbg-textColor/70">
            {timePlay ? timePlay : "0:00"}
          </p>
          <p className="text-xs text-white/70">
            {allTimeMusic ? allTimeMusic : "0:00"}
          </p>
        </div> */}
      </div>
    </>
  );
}
