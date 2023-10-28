"use client";

import { play, removePlaylist } from "@/app/redux/features/playlistSlice";
import { useDispatch } from "react-redux";

export default function ItemPlaylist({ track }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-auto overflow-auto">
      {track &&
        track.map((track) => (
          <div
            key={track.id}
            className="w-full h-16 relative px-2 py-3 hover:py-2 hover:px-3
                      flex flex-row justify-between items-center gap-3
                      rounded-xl overflow-hidden cursor-pointer
                      
                      duration-300"
          >
            <img
              src={track.cover}
              alt={track.cover}
              onClick={() => dispatch(play(track))}
              className="w-full h-full absolute object-cover blur-3xl opacity-0 hover:opacity-60 rounded-lg shadow-lg"
            />

            <img
              src={track.cover}
              alt={track.cover}
              onClick={() => dispatch(play(track))}
              className="h-full object-cover shadow-xl rounded-lg shadow-lg"
            />

            <div
              onClick={() => dispatch(play(track))}
              className="w-3/4 h-full mt-1 flex flex-col flex-nowrap justify-center items-start"
            >
              <p className="text-white/70 text-xs">
                {track.name.length >= 23
                  ? `${track.name.slice(0, 20)}...`
                  : track.name}
              </p>
              <p className="text-white/30 text-xs">{track.singer}</p>
            </div>

            {/*  btn clear and play item in playlist */}
            <div className="flex flex-row justify-center items-center gap-3">
              <i
                onClick={() => {
                  dispatch(removePlaylist(track.id));
                  console.log("track ==> " + track.id);
                }}
                className="fa fa-trash text-xs text-white/20 hover:text-white cursor-pointer duration-300"
              ></i>
              <i
                onClick={() => dispatch(play(track))}
                className="fa fa-circle-play text-sm text-white/20 hover:text-white cursor-pointer duration-300 "
              ></i>
            </div>
          </div>
        ))}
    </div>
  );
}
