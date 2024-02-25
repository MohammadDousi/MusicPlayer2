"use client";

import { getRecentlySongs } from "@/hooks/querys";
import ItemArtists from "./ItemArtists";

export default function FavArtists() {
  const { data, isError, error } = getRecentlySongs("getFavoriteArtists");

  console.log(data?.data);

  return (
    <section className="w-full">
      {isError && (
        <h5 className="w-full h-36 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemArtists data={data?.data} />
    </section>
  );
}
