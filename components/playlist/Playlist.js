import ItemPlaylist from "./ItemPlaylist";

export default function Playlist (){
 
  return (
    <div className="w-full h-1/2 pt-1 pb-2  flex flex-col justify-start items-center gap-1 overflow-hidden">
      <div className="w-full flex flex-row justify-between items-center px-2 pb-2 border-b border-slate-800">
        <h1 className="text-white/70 text-sm font-bold">Playlist</h1>
        <h1 className="text-white/30 text-xs">1 song</h1>
      </div>

        <ItemPlaylist/>
    </div>
  );
};

