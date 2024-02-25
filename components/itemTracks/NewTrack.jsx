"use client";

import { addPlaylist } from "@/app/redux/features/playlistSlice";
import { getRecentlySongs } from "@/hooks/querys";
import React from "react";
import { useDispatch } from "react-redux";
import TitleContainer from "../titleContainer/TitleContainer";
import ItemTracks from "./ItemTarack";

export default function NewTrack() {
  // get data recently track
  const { data, isError, error } = getRecentlySongs("getRecentlySongs");
  // get last track and set in playlist with addPlaylist redux
  const dispatch = useDispatch();
  data?.data?.[0] && dispatch(addPlaylist(data?.data?.[0]));

  return (
    <section className="w-full flex flex-col justify-start items-start gap-3">
      {isError && (
        <h5 className="w-full h-36 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}

      <ItemTracks recentlyTrack={data?.data} />
    </section>
  );
}
