"use client";

import Link from "next/link";
import { addPlaylist } from "@/app/redux/features/playlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function NewTracks({ recentlySong }) {


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(addPlaylist(recentlySong && recentlySong[recentlySong.length - 1]));
  },[])
  
  
  const selector = useSelector((state) => state.playlistSlice);

  return (
    <section className="w-full grid grid-cols-6 gap-5">
      {recentlySong &&
        recentlySong.map((track) => (
          <div
            key={track.id}
            className="w-full flex flex-col justify-start items-start gap-4 cursor-pointer"
            onClick={() => {
              dispatch(addPlaylist(track));
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
              <p className="w-full text-white/70 hover:text-white text-sm font-bold tracking-wide duration-300 cursor-pointer">
                <Link href={`/track/${track.id}`}>{track.name}</Link>
              </p>
              <p className="w-full text-white/40 text-sm font-normal">
                {track.singer}
              </p>
            </section>
          </div>
        ))}
    </section>
  );
}
