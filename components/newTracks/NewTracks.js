"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function NewTracks({ recentlyTrack }) {
  const dispatch = useDispatch();
  let lengthName = 23,
    cutLength = 20;

  // window.innerWidth <= 425 ? (lengthName = 18) : (cutLength = 23);
  // window.innerWidth <= 425 ? (cutLength = 15) : (cutLength = 20);

  useEffect(() => {
    dispatch(addPlaylist(recentlyTrack && recentlyTrack[0]));
  }, []);

  return (
    <Swiper
      className="!w-full !px-3 lg:!px-0"
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        320: {
          width: 320,
          spaceBetween: 15,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 4,
        },
        1024: {
          width: 1024,
          slidesPerView: 7,
        },
        1100: {
          width: 1100, // lg screen
          slidesPerView: 6.1,
        },
        1536: {
          width: 1536,
          slidesPerView: 5,
        },
      }}
    >
      {recentlyTrack &&
        recentlyTrack.map((track) => (
          <SwiperSlide key={track?.id}>
            <div className="w-full relative flex flex-col justify-start items-start gap-4 cursor-pointer">
              <div className="w-full h-full absolute opacity-0 hover:opacity-100 duration-300">
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

              <Image
                // src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                // alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                src={track?.cover}
                alt={track?.cover}
                className="w-full h-full object-cover rounded-xl shadow-lg"
                width={500}
                height={500}
                quality={100}
              />

              <section className="w-full">
                <Link
                  href={`/track/${track?.id}`}
                  className="w-full text-white/70 hover:text-white text-sm font-bold tracking-wide duration-300 cursor-pointer capitalize"
                >
                  {track?.name.length >= lengthName
                    ? `${track?.name.slice(0, cutLength)}...`
                    : track?.name}
                </Link>

                <p className="w-full text-white/40 text-sm font-normal capitalize">
                  {track.singer}
                </p>
              </section>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
