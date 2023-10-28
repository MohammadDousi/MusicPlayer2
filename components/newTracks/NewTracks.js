"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function NewTracks({ recentlySong }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPlaylist(recentlySong && recentlySong[0]));
  }, []);

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={5.8}
    >
      {recentlySong &&
        recentlySong.map((track) => (
          <SwiperSlide key={track.id}>
            <div
              className="w-full flex flex-col justify-start items-start gap-4 cursor-pointer"
              onClick={() => {
                dispatch(addPlaylist(track));
                dispatch(play(track));
              }}
            >
              {/* <Link href={`/track/${track.id}`} className="w-full"> */}
              <img
                src={track.cover}
                alt={track.cover}
                className="object-cover rounded-xl shadow-xl"
              />
              {/* </Link> */}

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
