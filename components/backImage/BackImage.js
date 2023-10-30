"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function BackImage() {
  const [track, setTrack] = useState({});

  const state = useSelector((state) => state.playlistSlice);
  const defaultTrack = state.list && state.list[state.list.length - 1];

  let trackPlay = state.trackPlay;

  useEffect(() => {
    !trackPlay && setTrack(defaultTrack);
  }, [defaultTrack]);

  useEffect(() => {
    trackPlay && setTrack(trackPlay);
  }, [trackPlay]);

  return (
    <Image
      src={track?.cover}
      alt="Image Blur Background track"
      width={500}
      height={500}
      quality={80}
      className="w-full h-full absolute object-cover blur-3xl opacity-10 z-0"
    />
  );
}
