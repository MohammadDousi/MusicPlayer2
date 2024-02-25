"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";
import { FreeMode } from "swiper/modules";

export default function ItemTracks({ recentlyTrack }) {
  const dispatch = useDispatch();
  return (
    <Swiper
      className="!w-full"
      spaceBetween={10}
      slidesPerView={2.4}
      freeMode={true}
      speed={1500}
      lazy="true"
      grabCursor={true}
      breakpoints={{
        430: {
          slidesPerView: 2.4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6.3,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 9,
          slidesPerView: 20,
        },
      }}
      modules={[FreeMode]}
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
                  className="w-14 h-14 absolute bottom-0 right-2 -translate-y-[4.2rem] bg-textColor/60 rounded-full shadow-xl flex justify-center items-center z-40"
                >
                  <i className="fa fa-play pl-1 text-primeryBack text-2xl"></i>
                </div>

                <Link href={`/track/${track.id}`}>
                  <div className="w-full h-full absolute"></div>
                </Link>
              </div>

              <Image
                src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                width={500}
                height={500}
                quality={100}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />

              <section className="w-full">
                <Link
                  href={`/track/${track?.id}`}
                  className="w-full text-textColor/70 hover:text-textColor text-sm font-bold tracking-wide duration-300 cursor-pointer capitalize"
                >
                  {track?.name.length >= 20
                    ? `${track?.name.slice(0, 17)}...`
                    : track?.name}
                </Link>

                <p className="w-full text-textColor/40 text-sm font-normal capitalize">
                  {track.singer}
                </p>
              </section>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
