

import cover from "@/public/image/coverSongs/cover.jpg"

export default function ItemPlaylist() {
  return (
    <div
      className="w-full h-16 px-2 py-3 hover:py-2 hover:px-3
    flex flex-row justify-between items-center gap-3 
    rounded-xl overflow-hidden cursor-pointer
    hover:bg-gradient-to-r hover:from-cyan-500/70 hover:to-purple-500/50
    duration-300"
    >
      <img
        src={cover}
        alt="cover.jpg"
        className="h-full object-cover rounded-lg shadow-lg"
      />

      <div className="w-3/4 h-full mt-1 flex flex-col flex-nowrap justify-center items-start">
        <p className="text-white/70 text-xs">Tulsa Jesus Freak</p>
        <p className="text-white/30 text-xs">Lana del Ray</p>
      </div>

      {/*  btn clear and play item in playlist */}
      <div className="flex flex-row justify-center items-center gap-3">
        <i className="fa fa-trash text-xs text-white/20 hover:text-white cursor-pointer duration-300"></i>
        <i className="fa fa-circle-play text-sm text-white/20 hover:text-white cursor-pointer duration-300 "></i>
      </div>
    </div>
  );
}
