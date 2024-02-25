"use client";
import { play } from "@/app/redux/features/playlistSlice";
import ItemPlaylist from "./ItemPlaylist";

import { useSelector } from "react-redux";

export default function Playlist() {

  let data = useSelector((state) => state.playlistSlice.list);

  return (
    <div className="w-full h-2/3 lg:w-1/3 lg:h-full flex flex-col justify-start lg:items-center gap-2 duration-300 overflow-hidden">
      <div className="w-full pb-4 border-b border-textColor/10">
        <h1 className="text-textColor/80 text-base font-bold capitalize tracking-wider">
          queue({data.length})
        </h1>
      </div>

      {(data == "" || null) && (
        <h3 className="w-full py-5 text-textColor/50 text-base text-center capitalize tracking-wide">
          No items
        </h3>
      )}

      {data && <ItemPlaylist track={data} />}
    </div>
  );
}
