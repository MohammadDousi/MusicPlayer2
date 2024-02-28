"use client";

import { getData } from "@/hooks/querys";
import ItemTracks from "./ItemTarack";

export default function PopularTrack() {


  const { data, isError, error } = getData("getRecentlySongs" ,"popular");

  const sortData = data?.data?.sort((a, b) => b.play - a.play);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-3">
      {isError && (
        <h5 className="w-full h-36 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemTracks data={sortData} />
    </section>
  );

}
