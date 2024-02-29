"use client";

import ItemSinger from "@/components/singer/ItemSinger";
import TitleContainer from "@/components/titleContainer/TitleContainer";
import { getData } from "@/hooks/querys";

export default function AllSinger() {
  const { data, isError, error } = getData("getAllArtists" ,"all signer");

  const popArtists = data?.data?.filter((item) => item?.geners === "pop");
  const rapArtists = data?.data?.filter((item) => item?.geners === "rap");
  const rockArtists = data?.data?.filter((item) => item?.geners === "rock");

  return (
    <>
      {popArtists && (
        <section className="w-full flex flex-col justify-start items-start gap-4">
          <TitleContainer title="Pop Artists" href="" />
          <ItemSinger data={popArtists} />
        </section>
      )}

      {rapArtists && (
        <section className="w-full flex flex-col justify-start items-start gap-4">
          <TitleContainer title="Rap Artists" href="" />
          <ItemSinger data={rapArtists} />
        </section>
      )}

      {rockArtists && (
        <section className="w-full flex flex-col justify-start items-start gap-4">
          <TitleContainer title="Rock Artists" href="" />
          <ItemSinger data={rockArtists} />
        </section>
      )}
    </>
  );
}
