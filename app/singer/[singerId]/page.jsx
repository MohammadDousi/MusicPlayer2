"use client";

import { getSingleSinger } from "@/hooks/querys";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Singer({ params }) {
  const {
    data: dataSinger,
    isError: isErrorSinger,
    error: errorSinger,
  } = getSingleSinger(params.singerId);

  console.log(dataSinger);

  return (
    <>
        <section className="w-full h-full lg:h-full z-10 relative flex flex-col lg:flex-row justify-start lg:justify-start items-start gap-10">
          <div className="w-full lg:w-auto flex justify-center items-center">
            <Image
              width={100}
              height={100}
              quality={100}
              unoptimized
              className={
                dataSinger?.data?.avator
                  ? "w-48 lg:w-64 h-64 lg:h-80 object-cover object-top rounded-full p-2 ring-1 ring-textColor/10"
                  : "w-48 lg:w-64 h-64 lg:h-80 p-14 object-contain object-center rounded-full saturate-0 opacity-50 ring-1 ring-textColor/10"
              }
              src={
                dataSinger?.data?.avator
                  ? `https://music.kaktusprog.ir/assets/file/artistsAvator/${dataSinger?.data?.avator}`
                  : logo
              }
              alt={
                dataSinger?.data?.avator
                  ? `https://music.kaktusprog.ir/assets/file/artistsAvator/${dataSinger?.data?.avator}`
                  : logo
              }
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-auto flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-6">
              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                <i className="fa fa-users"></i>
                {dataSinger?.data?.followers}
              </h3>

              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                {dataSinger?.data?.geners}
              </h3>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <h1 className="w-full text-left font-bold text-5xl lg:text-6xl text-textColor drop-shadow-lg">
                {dataSinger?.data?.name}
              </h1>

              <p className="w-full text-lg text-textColor/50 drop-shadow-lg">
                <span className="font-bold text-xl text-accentColor/50 italic capitalize">
                  biography :{" "}
                </span>
                {dataSinger?.data?.biography}
              </p>
            </div>
          </div>
        </section>
    </>
  );
}
