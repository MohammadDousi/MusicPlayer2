"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../../public/logo.png";
import TitleContainer from "@/components/titleContainer/TitleContainer";
import DownloadBox from "@/components/downloadBox/DownloadBox";
import TracksMore from "@/components/tracksMore/TracksMore";

import { getData, getSingleTrackData, likeTrack } from "@/hooks/querys";
import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";

export default function TrackId({ params }) {

  const [showDownloadBox, setShowDownloadBox] = useState(false);

  const dispatch = useDispatch();
  // get data on server
  const {
    data: track,
    isError: isErrorTrack,
    error: errorTrack,
  } = getSingleTrackData(params.trackId);

  const {
    data: moreSongs,
    isError: isErrorMoreSongs,
    error: errorMoreSongs,
  } = getData("getRecentlySongs" ,"moreSongs");

  const handlerLike = () => {
    mutation.mutate(params.trackId);
  };
  const mutation = likeTrack();

  const handleClick = (show) => {
    setShowDownloadBox(show);
  };

  return (
    <section className="w-full h-auto flex flex-col gap-10 lg:gap-16">
      {isErrorTrack && (
        <h5 className="w-full h-full text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {errorTrack.message}
        </h5>
      )}

      {/* box back blur image */}
      <div className="w-full h-4/5 absolute top-0 left-0 z-0">
        <span className="w-full h-full z-0 absolute bg-gradient-to-t from-primeryBack to-transparent"></span>
        <Image
          src={
            track?.data?.cover
              ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.data?.cover}`
              : logo
          }
          alt={
            track?.data?.cover
              ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.data?.cover}`
              : "logo"
          }
          className={
            track?.data?.cover
              ? "w-full h-full z-0 blur-3xl opacity-35 lg:opacity-20 rounded-3xl object-cover object-top"
              : "hidden"
          }
          width={500}
          height={500}
          property="true"
          unoptimized
          quality={50}
        />
      </div>

      {track?.data && (
        <section className="w-full h-auto z-20 pt-2 flex flex-col lg:flex-row justify-start items-center gap-6 overflow-hidden">
          <div className="w-2/3 lg:size-72 flex justify-center items-center">
            <Image
              src={
                track?.data?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.data?.cover}`
                  : logo
              }
              alt={
                track?.data?.cover
                  ? `https://musicland.kaktusprog.ir/assets/file/cover/${track?.data?.cover}`
                  : "logo"
              }
              className={
                track?.data?.cover
                  ? "rounded-3xl z-10 shadow-xl object-cover"
                  : "rounded-3xl z-10 shadow-xl object-contain saturate-0 p-3"
              }
              width={500}
              height={500}
              property="true"
              unoptimized
              quality={100}
            />
          </div>

          <div className="w-full lg:w-auto lg:mt-7 z-10 flex flex-col justify-start items-start gap-4">
            <p className="w-full text-textColor text-4xl lg:text-5xl text-center lg:text-left font-bold capitalize">
              {track?.data?.name}
            </p>

            <p className="w-full pl-1.5 text-textColor text-base font-normal capitalize tracking-wide">
              song by <Link href={""}>{track?.data?.singer}</Link>
              {` - ${track?.data?.play} plays - ${track?.data?.year}/${track?.data?.month}/${track?.data?.day}`}
            </p>

            {/* play, share, download, like button container */}
            <section className="w-full mt-5 grid grid-cols-3 lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:items-center lg:gap-2 gap-x-2.5 gap-y-3">
              <button
                onClick={() => {
                  dispatch(addPlaylist(track?.data));
                  dispatch(play(track?.data));
                }}
                className="w-full lg:w-auto h-10 px-5 text-textColor/50 font-normal hover:font-bold hover:text-primeryColor border border-textColor/50 hover:border-primeryColor hover:bg-textColor/10 rounded-full duration-300 capitalize tracking-wide col-span-3 flex flex-row justify-center items-center gap-2 lg:gap-3"
              >
                <i className="fa fa-play"></i>
                play
              </button>
              <button
                onClick={() => handlerLike()}
                className="h-10 px-5 text-textColor/50 font-normal hover:font-bold hover:text-red-600 border border-textColor/50 hover:border-red-600 hover:bg-textColor/10 rounded-full duration-300 capitalize tracking-wide flex flex-row justify-center items-center gap-2 lg:gap-3"
              >
                <i className="fa fa-heart"></i>
                {track?.data?.slike}
              </button>

              <button
                onClick={() => setShowDownloadBox(!showDownloadBox)}
                className="h-10 px-5 text-textColor/50 font-normal hover:font-bold hover:text-primeryColor border border-textColor/50 hover:border-primeryColor hover:bg-textColor/10 rounded-full duration-300 capitalize tracking-wide flex flex-row justify-center items-center gap-2 lg:gap-3"
              >
                <i className="fa fa-download"></i>
                download
              </button>

              <button className="h-10 px-5 text-textColor/50 font-normal hover:font-bold hover:text-primeryColor border border-textColor/50 hover:border-primeryColor hover:bg-textColor/10 rounded-full duration-300 capitalize tracking-wide flex flex-row justify-center items-center gap-2 lg:gap-3">
                <i className="fa fa-share"></i>
                share
              </button>
            </section>
          </div>
        </section>
      )}

      <div className="w-full z-20 flex flex-col justify-start items-start gap-4">
        {isErrorMoreSongs && (
          <h5 className="w-full h-full text-textColor/70 text-base font-normal tracking-wide capitalize">
            something went wrong - {errorMoreSongs.message}
          </h5>
        )}

        <TitleContainer title="more songs" href="" />
        <TracksMore data={moreSongs?.data} />
      </div>

      {/* <!-- download box--> */}
      <DownloadBox
        data={track?.data}
        showDownloadBox={showDownloadBox}
        handleClick={handleClick}
      />
    </section>
  );
}
