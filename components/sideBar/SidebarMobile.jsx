"use client";

import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SidebarMobile({ sideTab }) {
  const router = useRouter();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenuHandler = () => {
    setIsShowMenu(!isShowMenu);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsShowMenu(!isShowMenu)}
        className="lg:hidden size-16 bg-primeryBackDarker text-textColor/80 fixed z-40 right-5 bottom-28 shadow-2xl shadow-primeryBackDarker rounded-full"
      >
        <i className="fa fa-bars"></i>
      </button>

      <section
        className={
          isShowMenu
            ? "lg:hidden w-full h-full fixed z-30 left-0 top-0 py-5 px-8 bg-primeryBackDarker flex flex-col justify-center items-center gap-12 translate-y-0 duration-500"
            : "lg:hidden w-full h-full fixed z-30 py-5 px-8 bg-primeryBackDarker flex flex-col justify-center items-center gap-12 -translate-y-full duration-500"
        }
      >
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            quality={100}
            unoptimized
            className="size-28 object-contain"
          />
          <h1 className="w-full mt-5 text-center text-textColor/85 text-2xl font-black tracking-wider capitalize">
            MusicLand
          </h1>

          <Link
            href={"https://www.kaktusprog.ir/"}
            className="w-full text-center text-textColor font-normal text-sm capitalize cursor-pointer tracking-wide"
          >
            Designed and developed by{" "}
            <span className="text-primeryColor font-bold">mohammad dosi</span>
            <span></span>
          </Link>
        </div>

        <section className="w-full flex flex-col justify-start items-start gap-3">
          {sideTab &&
            sideTab?.map((tab) => (
              <div
                key={tab.name}
                className={
                  // location.pathname === tab.path
                  //   ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                  // :
                  "w-full pl-3 py-4 text-textColor/80 hover:text-primeryColor font-normal hover:font-bold capitalize tracking-wide hover:bg-primeryBack flex flex-row justify-start items-center gap-5 cursor-pointer duration-300 rounded-xl"
                }
                onClick={() => {
                  showMenuHandler();
                  router.push(tab.path, { scroll: true });
                }}
              >
                <i
                  className={`${tab.icon} text-base w-5 flex justify-center items-center opacity-80`}
                ></i>
                <h3 className="w-full text-xl">{tab.name}</h3>
              </div>
            ))}
        </section>
      </section>
    </>
  );
}
