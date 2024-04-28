import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";

import { addPlaylist, play } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";

export default function ItemTracks({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <Swiper
        className="w-full"
        spaceBetween={10}
        slidesPerView={2.4}
        freeMode={true}
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
            slidesPerView: 5.8,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 9,
            slidesPerView: 20,
          },
        }}
        modules={[FreeMode]}
      >
        {data &&
          data?.map((track) => (
            <SwiperSlide key={track?.id}>
              <div className="w-full relative flex flex-col justify-start items-start gap-4 cursor-pointer">
                <div className="size-full absolute opacity-0 hover:opacity-100 duration-300">
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
                  width={500}
                  height={500}
                  quality={100}
                  priority={true}
                  unoptimized
                  className="size-full object-cover rounded-2xl shadow-lg"
                />

                <section className="w-full pl-1">
                  <Link
                    href={`/track/${track?.id}`}
                    className="w-full text-textColor/70 hover:text-textColor text-base font-bold tracking-wide duration-300 cursor-pointer capitalize"
                  >
                    {track?.name.length >= 20
                      ? `${track?.name.slice(0, 16)}...`
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

      {!data && (
        <div className="w-56 flex flex-col justify-start items-start gap-4">
          <div className="size-44 bg-textColor/10 rounded-2xl animate-pulse"></div>
          <section className="w-full space-y-2">
            <div className="w-2/3 h-2 bg-textColor/10 rounded-full animate-pulse"></div>
            <div className="w-1/3 h-2 bg-textColor/10 rounded-full animate-pulse"></div>
          </section>
        </div>
      )}
    </>
  );
}
