"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist, pause, play } from "@/app/redux/features/playlistSlice";
import Playlist from "./Playlist";

import logo from "../../public/logo.png";
import { countPlayTrack, getData } from "@/hooks/querys";
import { useMutation } from "@tanstack/react-query";

export default function Player() {
  // get data recently track
  const { data, isError, error } = getData("getRecentlySongs", "player");
  // get last track and set in playlist with addPlaylist redux
  const dispatch = useDispatch();
  useEffect(() => {
    data?.data?.[0] && dispatch(addPlaylist(data?.data?.[0]));
  }, [data?.data]);

  const [isBigOrMini, setIsBigOrMini] = useState(true); // false is big and true is mini

  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio());
  }, []);

  const [track, setTrack] = useState({});

  const [widthProgreesTimePlay, setWidthProgreesTimePlay] = useState(0);
  const [badge, setBadge] = useState(0);
  const [timePlay, setTimePlay] = useState("");
  const [allTimeMusic, setAllTimeMusic] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const widthProgreesTimeOnplay = useRef("");

  const state = useSelector((state) => state.playlistSlice);
  let trackPlay = state.trackPlay;
  const defaultTrack = state.list && state.list[state.list.length - 1];

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    !trackPlay && setTrack(defaultTrack);
  }, [defaultTrack]);

  useEffect(() => {
    setIsPlaying(state?.play);
    if (trackPlay) {
      setTrack(trackPlay);
      loadSong(trackPlay?.name);
      mutation?.mutate(trackPlay?.id);
    }
  }, [trackPlay]);
  const mutation = countPlayTrack();

  const playHandler = () => {
    if (!isPlaying) {
      loadSong(track?.name);
      setIsPlaying(true);
    } else {
      puaseSong();
      setIsPlaying(false);
    }
    if (currentTime) {
      audio.currentTime = currentTime;
    }
  };

  const loadSong = (name) => {
    audio.src = `https://musicland.kaktusprog.ir/assets/file/song/${name}.mp3`;
    audio.load();
    playSong();
  };

  const playSong = () => {
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
    let badge = (currentTime / duration) * widthOnPlay - 8;
    if (badge) {
      setBadge(badge);
    }
    setCurrentTime(currentTime);
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
        className={
          isBigOrMini
            ? "w-96 h-16 px-5 py-10 fixed right-3 bottom-3 z-50 bg-primeryBackDarker shadow-2xl shadow-primeryBackDarker flex flex-row justify-center items-center gap-4 rounded-2xl duration-500"
            : "w-full h-dvh lg:h-screen p-6 lg:p-12 fixed right-0 bottom-0 z-50 bg-primeryBackDarker flex flex-col lg:flex-row justify-between lg:justify-start items-center gap-4 lg:gap-12 duration-500"
        }
      >
        {!isBigOrMini && <Playlist />}

        <div
          className={
            isBigOrMini
              ? "w-full h-full flex flex-row justify-center items-center gap-4 shadow-xl"
              : "w-full lg:w-2/3 p-6 lg:p-0 lg:h-full relative bg-primeryBack rounded-3xl flex flex-col justify-center items-center gap-8 overflow-hidden"
          }
        >
          <div
            className={
              isBigOrMini
                ? "w-full h-full flex flex-row justify-center items-center gap-4"
                : "w-full flex flex-row lg:flex-col justify-center items-center gap-6"
            }
          >
            <Image
              src={
                track?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              alt={
                track?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              className={
                isBigOrMini
                  ? "hidden duration-300"
                  : "hidden lg:block lg:w-full lg:h-full lg:z-0 lg:absolute lg:blur-3xl lg:opacity-20 lg:object-cover"
              }
              width={500}
              height={500}
              quality={40}
              unoptimized
            />

            <Image
              src={
                track?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              alt={
                track?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              className={
                isBigOrMini
                  ? track?.cover
                    ? "size-12 rounded-xl shadow-2xl object-cover ring-1 ring-textColor/20 ring-offset-4 ring-offset-primeryBackDarker duration-300"
                    : "size-12 p-1 rounded-xl shadow-2xl object-contain ring-1 ring-textColor/20 ring-offset-4 ring-offset-primeryBackDarker saturate-0 duration-300"
                  : track?.cover
                  ? "size-12 lg:w-1/3 lg:h-auto lg:z-10 ring-1 lg:ring-2 ring-textColor/20 ring-offset-4 lg:ring-offset-8 ring-offset-primeryBack/70 rounded-xl lg:rounded-3xl shadow-2xl object-cover duration-300 delay-150"
                  : "size-12 lg:w-1/3 lg:h-auto lg:z-10 ring-1 lg:ring-2 ring-textColor/20 ring-offset-4 lg:ring-offset-8 ring-offset-primeryBack/70 rounded-xl lg:rounded-3xl shadow-2xl object-cover duration-300 delay-150 saturate-0 p-5"
              }
              width={500}
              height={500}
              quality={100}
              unoptimized
            />

            <div
              className={
                isBigOrMini
                  ? "w-full flex flex-col justify-center items-center"
                  : "w-full lg:mt-2 z-10 flex flex-col justify-center items-center gap-1"
              }
            >
              <p
                className={
                  isBigOrMini
                    ? "w-full text-left text-textColor/80 text-base font-bold capitalize tracking-wide"
                    : "w-full text-textColor/80 text-left lg:text-center text-base lg:text-3xl font-bold capitalize tracking-wide"
                }
              >
                {typeof window !== "undefined" && window?.innerWidth < 430
                  ? track?.name?.length > 20
                    ? `${track?.name?.slice(0, 18)}...`
                    : track?.name
                  : isBigOrMini
                  ? track?.name?.length > 20
                    ? `${track?.name?.slice(0, 15)}...`
                    : track?.name
                  : track?.name}
              </p>
              <p
                className={
                  isBigOrMini
                    ? "w-full text-left text-textColor/50 text-sm font-normal capitalize tracking-wide"
                    : "w-full text-textColor/50 text-left lg:text-center text-sm lg:text-base font-normal capitalize tracking-wide"
                }
              >
                {track?.singer}
              </p>
            </div>
          </div>

          <div
            className={
              isBigOrMini
                ? "pr-2 pb-1 flex flex-col justify-center items-center gap-2"
                : "w-full lg:w-1/3 z-10 flex flex-col justify-center items-center gap-6"
            }
          >
            <div className="w-full flex flex-row justify-between items-center gap-6">
              <i
                className={
                  isBigOrMini
                    ? "hidden"
                    : "fa fa-repeat text-textColor/50 hover:text-primeryColor text-xl lg:text-base cursor-pointer duration-300"
                }
              ></i>

              <i
                onClick={() => backwardHandler()}
                className="fa fa-backward-step text-textColor/50 hover:text-primeryColor text-xl lg:text-base cursor-pointer duration-300"
              ></i>
              <i
                className={
                  !isPlaying
                    ? isBigOrMini
                      ? "fa fa-circle-play text-primeryColor text-2xl cursor-pointer duration-300"
                      : "fa fa-circle-play text-primeryColor text-4xl cursor-pointer duration-300"
                    : isBigOrMini
                    ? "fa fa-pause text-primeryColor text-2xl cursor-pointer duration-300"
                    : "fa fa-pause text-primeryColor text-4xl cursor-pointer duration-300"
                }
                onClick={() => playHandler()}
              ></i>
              <i
                onClick={() => forwardHandler()}
                className="fa fa-step-forward text-textColor/50 hover:text-primeryColor text-xl lg:text-base cursor-pointer duration-300"
              ></i>
              <i
                className={
                  isBigOrMini
                    ? "hidden"
                    : "fa fa-shuffle text-textColor/50 hover:text-primeryColor text-xl lg:text-base cursor-pointer duration-300"
                }
              ></i>
            </div>

            <div
              className="w-full h-1 relative rounded-full bg-textColor/10 flex flex-row flex-nowrap justify-start items-center cursor-pointer"
              onClick={setProgresse}
              ref={widthProgreesTimeOnplay}
            >
              <span
                style={{ width: `${widthProgreesTimePlay}%` }}
                className="absolute h-1.5 bg-textColor/80 rounded-full z-10 flex flex-row justify-start items-center cursor-pointer duration-300"
              ></span>

              <span
                className="size-2.5 rounded-full absolute cursor-pointer bg-primeryColor z-20 duration-300"
                style={{ transform: `translateX(${badge}px)` }}
              ></span>
            </div>

            <div
              className={
                isBigOrMini
                  ? "hidden flex-row justify-between items-center duration-300"
                  : "w-full z-10 flex flex-row justify-between items-center duration-300"
              }
            >
              <p className="text-sm text-primeryColor font-bold tracking-wide">
                {timePlay ? timePlay : "0:00"}
              </p>
              <p className="text-sm text-textColor/50 tracking-wide">
                {allTimeMusic ? allTimeMusic : "0:00"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBigOrMini(!isBigOrMini)}
            className={
              isBigOrMini
                ? "btnBigOrMini absolute -top-7 lg:-top-7 lg:left-20 -z-20 w-14 h-7 bg-primeryBackDarker text-textColor/80 rounded-t-full cursor-pointer flex justify-center items-center duration-300"
                : "btnBigOrMini absolute lg:top-0 bottom-0 lg:bottom-auto lg:right-32 lg:rotate-180 z-20 w-14 h-7 bg-primeryBackDarker text-textColor/80 rounded-t-full cursor-pointer flex justify-center items-center duration-300"
            }
          >
            <i
              className={
                isBigOrMini
                  ? "fa fa-angle-up mt-4 text-primeryColor"
                  : "fa fa-angle-down lg:fa-angle-up lg:-rotate-180 mt-4 text-primeryColor"
              }
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}
