import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TracksMore({ data }) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-4">
        {data?.map((track) => (
          <Link
            href={`/track/${track?.id}`}
            key={track?.id}
            className="w-full h-auto flex flex-row justify-center items-center gap-3 duration-300 cursor-pointer"
          >
            <Image
              src={
                track?.cover
                  ? `https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              alt={
                track?.cover
                  ? `https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`
                  : logo
              }
              className={
                track?.cover
                  ? "size-14 rounded-xl shadow-xl shadow-primeryBackDarker object-cover"
                  : "size-14 p-1 rounded-xl shadow-xl shadow-primeryBackDarker object-contain saturate-0"
              }
              width={100}
              height={100}
              quality={100}
              unoptimized
            />

            <div className="w-full h-14 px-3 lg:px-5 bg-gradient-to-r from-textColor/5 hover:from-textColor/15 to-transparent rounded-xl flex flex-row justify-start items-center gap-4">
              <div
                onClick={() => dispatch(play(track))}
                className="flex flex-col lg:flex-row justify-center items-center gap-0.5 lg:gap-10"
              >
                <p className="text-textColor/80 text-base font-bold capitalize tracking-wide">
                  {typeof window !== "undefined" && window?.innerWidth < 430
                    ? track?.name.length >= 23
                      ? `${track?.name.slice(0, 20)}...`
                      : track?.name
                    : track?.name}
                </p>

                <p className="text-textColor/50 text-sm lg:text-base font-normal capitalize tracking-wide">
                  {track?.singer}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
