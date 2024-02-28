"use client";

import { getData } from "@/hooks/querys";
import ItemSinger from "./ItemSinger";

export default function FavSinger() {
  const { data, isError, error } = getData("getFavoriteArtists");
  return (
    <section className="w-full">
      {isError && (
        <h5 className="w-full h-36 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemSinger data={data?.data} />
    </section>
  );
}
