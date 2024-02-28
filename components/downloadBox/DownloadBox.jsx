"use client";

import React, { useRef, useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function DownloadBox({ data , showDownloadBox , handleClick }) {
  const downloadFrame = useRef();

  return (
    <section
      className={
        showDownloadBox
          ? "w-full min-h-dvh lg:h-screen z-40 absolute top-0 left-0 flex flex-row justify-center items-center translate-y-0 duration-300"
          : "w-full h-0 opacity-0 z-40 absolute top-0 left-0 flex flex-row justify-center items-center translate-y-full duration-300 overflow-hidden"
      }
    >
      <span
        className="w-full h-full absolute z-10 bg-primeryBackDarker"
        onClick={() => handleClick(false)}
      ></span>

      <div className="w-80 h-auto p-10 z-40 bg-primeryBack rounded-3xl flex flex-col justify-center items-center gap-8">
        <Image
          src={
            data?.cover
              ? `https://music.kaktusprog.ir/assets/file/cover/${data?.cover}`
              : logo
          }
          alt={
            data?.cover
              ? `https://music.kaktusprog.ir/assets/file/cover/${data?.cover}`
              : logo
          }
          className={
            data?.cover
              ? "size-52 rounded-3xl z-10 shadow-xl object-cover"
              : "size-52 rounded-3xl z-10 shadow-xl object-contain saturate-0 p-3"
          }
          width={500}
          height={500}
          quality={100}
        />
        <h3 className="w-full text-center text-textColor/40 text-base font-normal">
          <span className="font-bold text-lg text-textColor/80">{data?.name}</span><br />Click on Download
        </h3>
        <div className="w-full flex flex-row justify-center items-center gap-2">
          <button
            className="h-10 px-5 text-primeryBackDarker font-bold border bg-primeryColor rounded-full duration-300 capitalize tracking-wide flex flex-row justify-center items-center gap-3"
            onClick={() =>
              (downloadFrame.current.src = `https://music.kaktusprog.ir/assets/file/song/${data?.name}.mp3`)
            }
          >
            <iframe className="hidden" ref={downloadFrame} />
            <i className="fa fa-download"></i>
            <p>Download</p>
          </button>
          <button
            className="h-10 px-5 text-textColor/50 font-normal hover:font-bold hover:text-primeryColor border hover:border-primeryColor hover:bg-textColor/10 rounded-full duration-300 capitalize tracking-wide flex flex-row justify-center items-center gap-3"
            onClick={() => handleClick(false)}
          >
            <p>Close</p>
          </button>
        </div>
      </div>
    </section>
  );
}
