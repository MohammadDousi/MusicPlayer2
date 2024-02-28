import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";

export default function ItemSinger({ data }) {
  return (
    <Swiper
      className="!w-full"
      spaceBetween={10}
      freeMode={true}
      lazy="true"
      slidesPerView={2.8}
      grabCursor={true}
      breakpoints={{
        430: {
          slidesPerView: 2.8,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 15,
        },
      }}
      modules={[FreeMode]}
    >
      {data &&
        data?.map((items) => (
          <SwiperSlide key={items?.id}>
            <Link
              key={items.id}
              href={`/singer/${items.id}`}
              className="h-48 lg:h-52 bg-textColor/5 hover:bg-textColor/15 p-3 rounded-2xl flex flex-col justify-start items-start gap-3 duration-300 overflow-hidden"
            >
              <Image
                width={100}
                height={100}
                quality={100}
                loading="lazy"
                unoptimized
                className={
                  items?.avator
                    ? "w-full h-3/4 object-cover object-top rounded-full"
                    : "w-full h-3/4 p-3 object-contain object-center rounded-full saturate-0 opacity-50 ring-1 ring-textColor/25 cursor-pointer"
                }
                src={
                  items?.avator
                    ? `https://music.kaktusprog.ir/assets/file/artistsAvator/${items?.avator}`
                    : logo
                }
                alt={
                  items?.avator
                    ? `https://music.kaktusprog.ir/assets/file/artistsAvator/${items?.avator}`
                    : logo
                }
              />

              <h2 className="w-full font-medium text-sm text-center text-textColor/50 tracking-wide capitalize">
                {items?.name?.length >= 20
                  ? `${items?.name?.slice(0, 15)}...`
                  : items?.name}
              </h2>
            </Link>
          </SwiperSlide>
        ))}

      {!data && (
        <div className="w-1/4 lg:w-32 bg-textColor/5 rounded-2xl flex flex-col justify-start items-start gap-3">
          <div className="w-full lg:h-52 p-3 flex flex-col justify-center items-center gap-3 select-none overflow-hidden">
            <div className="w-full h-3/4 rounded-full bg-textColor/10 animate-pulse"></div>
            <div className="w-1/2 h-2 rounded-full bg-textColor/10 animate-pulse"></div>
          </div>
        </div>
      )}
    </Swiper>
  );
}
