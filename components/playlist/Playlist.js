"use client";
import { play } from "@/app/redux/features/playlistSlice";
import ItemPlaylist from "./ItemPlaylist";

import { useSelector } from "react-redux";

export default function Playlist() {
  let data = useSelector((state) => state.playlistSlice.list);

  return (
    <div className="w-full h-2/5 pt-1 pb-2  flex flex-col justify-start items-center gap-1 overflow-hidden">
      <div className="w-full flex flex-row justify-between items-center px-2 pb-2 border-b border-slate-800">
        <h1 className="text-white/70 text-sm font-bold">Playlist</h1>
        <h1 className="text-white/30 text-xs capitalize">
          {data.length} queue
        </h1>
      </div>

      {(data == "" || null) && (
        <h3 className="w-full py-4 text-white/40 text-sm text-center capitalize">
          No items
        </h3>
      )}

      {data && (
        <ItemPlaylist track={data}/>
      )}
    </div>
  );
}
