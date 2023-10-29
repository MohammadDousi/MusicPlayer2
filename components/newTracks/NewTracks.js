"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function NewTracks({ recentlySong }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPlaylist(recentlySong && recentlySong[0]));
  }, []);

  // w-full h-4/5 absolute -translate-y-4 hover:-translate-y-6 opacity-0 hover:opacity-100 duration-300 z-0
  return (
    <Swiper spaceBetween={25} slidesPerView={5.8}>
      {recentlySong &&
        recentlySong.map((track) => (
          <SwiperSlide key={track.id}>
            <div className="w-full relative flex flex-col justify-start items-start gap-4 rounded-xl cursor-pointer overflow-hidden">
           
              <div className="w-full h-full  absolute opacity-0 hover:opacity-100 duration-300">
                <div
                  onClick={() => {
                    dispatch(addPlaylist(track));
                    dispatch(play(track));
                  }}
                  className="w-14 h-14 absolute bottom-0 right-2 -translate-y-[4.2rem] bg-white rounded-full shadow-xl shadow-slate-700 flex justify-center items-center z-40"
                >
                  <i className="fa fa-play pl-1 text-slate-700 text-2xl"></i>
                </div>

                <Link href={`/track/${track.id}`}>
                  <div className="w-full h-full absolute"></div>
                </Link>
              </div>

              <img
                src={track.cover}
                alt={track.cover}
                className="object-cover rounded-2xl shadow-lg"
              />

              <section className="w-full">
                <Link
                  href={`/track/${track.id}`}
                  className="w-full text-white/70 hover:text-white text-sm font-bold tracking-wide duration-300 cursor-pointerF"
                >
                  {track.name.length >= 23
                    ? `${track.name.slice(0, 20)}...`
                    : track.name}
                </Link>

                <p className="w-full text-white/40 text-sm font-normal">
                  {track.singer}
                </p>
              </section>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
