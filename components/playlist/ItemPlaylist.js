"use client";

import Image from "next/image";
import { play, removePlaylist } from "@/app/redux/features/playlistSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ItemPlaylist({ track }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.playlistSlice);
  return (
    <div className="w-full h-auto overflow-auto">
      {track &&
        track.map((track) => (
          <div
            key={track.id}
            className="w-full h-20 relative px-3
                      flex flex-row justify-between items-center gap-3
                      rounded-xl overflow-hidden cursor-pointer duration-300"
          >
            <Image
              src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
              alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
              className={
                track.id == state?.trackPlay?.id
                  ? "lg:w-full lg:h-full lg:absolute lg:object-cover lg:blur-3xl lg:opacity-70 lg:rounded-lg lg:shadow-lg lg:duration-300 lg:z-10"
                  : "lg:w-full lg:h-full lg:absolute lg:object-cover lg:blur-3xl lg:opacity-0 lg:hover:opacity-70 lg:rounded-lg lg:shadow-lg lg:duration-300 lg:z-10"
              }
              width={200}
              height={200}
              quality={100}
              onClick={() => dispatch(play(track))}
            />

            <div className="flex flex-row justify-start items-center gap-4 z-0">
              <Image
                src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                className="size-14 rounded-xl shadow-2xl object-cover"
                width={200}
                height={200}
                quality={100}
              />

              <div
                onClick={() => dispatch(play(track))}
                className="flex flex-col justify-center items-start gap-0.5"
              >
                <p className="lg:text-textColor/80 lg:text-base lg:font-bold lg:capitalize lg:tracking-wide">
                  {window.innerWidth < 430
                    ? track.name.length >= 23
                      ? `${track.name.slice(0, 20)}...`
                      : track.name
                    : track.name}
                </p>

                <p className="text-textColor/50 text-sm font-normal capitalize tracking-wide">
                  {track.singer}
                </p>
              </div>
            </div>

            {/*  btn clear and play item in playlist */}
            <div className="flex flex-row justify-center items-center gap-4 z-10">
              <i
                onClick={() => {
                  dispatch(removePlaylist(track.id));
                  console.log("track ==> " + track.id);
                }}
                className="fa fa-trash text-xs lg:text-sm text-textColor/20 hover:text-textColor cursor-pointer duration-300"
              ></i>
              <i
                onClick={() => dispatch(play(track))}
                className={
                  track.id == state?.trackPlay?.id ?
                  "fa fa-circle-play text-base lg:text-xl text-primeryColor cursor-pointer duration-300" : "hidden"}
                
              ></i>
            </div>
          </div>
        ))}
    </div>
  );
}
