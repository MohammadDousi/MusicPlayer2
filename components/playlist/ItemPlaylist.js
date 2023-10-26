"use client";

import { useSelector } from "react-redux";

export default function ItemPlaylist() {
  let recentlySong = useSelector((state) => state.playlistSlice.list);
  console.log(recentlySong);

  return (
    <div className="w-full h-auto overflow-auto">
      {recentlySong &&
        recentlySong.map((track) => (
          <div
            key={track.id}
            className="w-full h-16 px-2 py-3 hover:py-2 hover:px-3
                      flex flex-row justify-between items-center gap-3
                      rounded-xl overflow-hidden cursor-pointer
                      hover:bg-gradient-to-r hover:from-cyan-500/70 hover:to-purple-500/50
                      duration-300"
          >
            <img
              src={track.cover}
              alt={track.cover}
              className="h-full object-cover rounded-lg shadow-lg"
            />

            <div className="w-3/4 h-full mt-1 flex flex-col flex-nowrap justify-center items-start">
              <p className="text-white/70 text-xs">{track.name}</p>
              <p className="text-white/30 text-xs">{track.singer}</p>
            </div>

            {/*  btn clear and play item in playlist */}
            <div className="flex flex-row justify-center items-center gap-3">
              <i className="fa fa-trash text-xs text-white/20 hover:text-white cursor-pointer duration-300"></i>
              <i className="fa fa-circle-play text-sm text-white/20 hover:text-white cursor-pointer duration-300 "></i>
            </div>
          </div>
        ))}
    </div>
  );
}
