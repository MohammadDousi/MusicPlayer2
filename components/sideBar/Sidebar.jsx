"use client";

import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SidebarMobile from "./SidebarMobile";

export default function Sidebar() {
  const sideTab = [
    {
      name: "home",
      path: "/",
      icon: "fa fa-home",
    },
    {
      name: "Profile",
      path: ``,
      icon: "fa fa-user",
    },
    {
      name: "search",
      path: "",
      icon: "fa fa-search",
    },
    {
      name: "about us",
      path: "https://www.kaktusprog.ir/",
      icon: "fa fa-info",
    },
  ];

  return (
    <>
      <section className="hidden w-80 h-full py-5 px-8 bg-primeryBackDarker lg:flex flex-col justify-between items-start gap-0">
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <div className="w-full flex flex-row justify-start items-center gap-3 select-none">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              quality={100}
              unoptimized
              className="size-12 object-contain"
            />
            <h1 className="text-textColor/85 text-xl font-black tracking-wider capitalize">
              MusicLand
            </h1>
          </div>

          <section className="w-full flex flex-col justify-start items-start gap-1">
            {sideTab &&
              sideTab?.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.path}
                  className={
                    // location.pathname === tab.path
                    //   ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                    // :
                    "w-full pl-3 py-2 text-textColor/80 hover:text-primeryColor font-normal hover:font-bold capitalize tracking-wide hover:bg-primeryBack flex flex-row justify-start items-center gap-4 cursor-pointer duration-300 rounded-xl"
                  }
                >
                  <i
                    className={`${tab.icon} text-xs w-5 flex justify-center items-center opacity-80`}
                  ></i>
                  <h3 className="w-full text-base">{tab.name}</h3>
                </Link>
              ))}
          </section>
        </div>

        <Link
          href={"https://www.kaktusprog.ir/"}
          className="w-full text-center text-textColor font-normal text-sm capitalize cursor-pointer tracking-wide"
        >
          Designed and developed by{" "}
          <span className="text-primeryColor font-bold">mohammad dosi</span>
          <span></span>
        </Link>
      </section>

      <SidebarMobile sideTab={sideTab} />
    </>
  );
}
