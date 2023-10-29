"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "@/app/redux/features/playlistSlice";

export default function Player() {
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
    setTrack(defaultTrack);
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
      <div className="w-full relative h-3/5 py-3 px-6 flex flex-col justify-around items-center bg-gradient-to-r from-slate-800 to-slate-800 rounded-2xl overflow-hidden">
        {/* <img
          src={track?.cover}
          alt={track?.cover}
          className="w-full h-full z-0 absolute blur-3xl opacity-60 backdrop-blur-xl rounded-3xl object-cover"
        /> */}

        <Image
          src={track?.cover}
          alt={track?.cover}
          className="w-full h-full z-0 absolute blur-3xl opacity-60 backdrop-blur-xl rounded-3xl object-cover"
          width={500}
          height={500}
          quality={100}
        />

        <div className="w-full flex flex-col justify-center items-center z-10">
          {/* <img
            src={track?.cover}
            alt={track?.cover}
            className="w-full mb-3 rounded-3xl shadow-2xl object-cover z-10"
          /> */}

          <Image
            src={track?.cover}
            alt={track?.cover}
            className="w-full mb-3 rounded-3xl shadow-2xl object-cover z-10"
            width={500}
            height={500}
            quality={100}
          />

          <p className="text-white/70 text-base">{track?.name}</p>
          <p className="text-white/30 text-sm">{track?.singer}</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center z-10">
          <i className="fa fa-repeat px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"></i>
          <i
            onClick={() => backwardHandler()}
            className="fa fa-backward-step px-2 text-white/70 hover:text-white text-sm cursor-pointer duration-300"
          ></i>
          <i
            className={
              !isPlaying
                ? "fa fa-circle-play px-2 text-white/70 hover:text-white text-4xl cursor-pointer duration-300"
                : "fa fa-pause px-2 text-white/70 hover:text-white text-4xl cursor-pointer duration-300"
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
          className="w-full h-1 relative rounded-full bg-white/50 flex flex-row flex-nowrap justify-start items-center cursor-pointer progrees-time-track"
          onClick={setProgresse}
          ref={widthProgreesTimeOnplay}
        >
          <span
            style={{ width: `${widthProgreesTimePlay}%` }}
            className="absolute h-3 bg-white rounded-full z-10 flex flex-row justify-start items-center cursor-pointer duration-300 progrees-time-play"
          ></span>

          <span
            className="w-3 h-3 rounded-full absolute cursor-pointer bg-white z-20 duration-300"
            // id="badge-time"
            style={{ transform: `translateX(${badge}px)` }}
          ></span>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-xs text-white/70">
            {timePlay ? timePlay : "0:00"}
          </p>
          <p className="text-xs text-white/70">
            {allTimeMusic ? allTimeMusic : "0:00"}
          </p>
        </div>
      </div>
    </>
  );
}
