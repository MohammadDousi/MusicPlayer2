import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-3 flex flex-row-reverse justify-center items-center gap-2">
      {/*  sidebar playlist  */}
      <div className="w-1/5 h-full bg-slate-950/50 overflow-hidden rounded-2xl">
        {/*  playlist */}
        <div className="w-full h-1/2 p-2 flex flex-col justify-start items-center gap-1 overflow-hidden">
          <div className="w-full flex flex-row justify-between items-center px-3 py-2 border-b border-slate-800">
            <h1 className="text-white/70 text-sm font-bold">Playlist</h1>
            <h1 className="text-white/30 text-sm">1 song</h1>
          </div>

          <div className="w-full h-auto overflow-auto">
            {/*  items playlist */}
            <div className="itemPlaylist">
              <img src="/cover.jpg" alt="cover.jpg" />

              <div className="nameSinger">
                <p>Tulsa Jesus Freak</p>
                <p>Lana del Ray</p>
              </div>

              {/*  btn clear and play item in playlist */}
              <div className="clearAndPlayItem">
                <i className="fa fa-trash"></i>
                <i className="fa fa-circle-play"></i>
              </div>
            </div>
          </div>
        </div>

        {/* player */}

        <div className="w-full h-1/2 p-2 flex flex-col justify-start items-center gap-6 rounded-xl">
          <img
            src="/cover.jpg"
            alt="cover.jpg"
            className="w-3/4 rounded-3xl object-cover"
          />

          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-white/70 text-base">Tulsa Jesus Freak</p>
            <p className="text-white/30 text-sm">Lana del Ray</p>
          </div>

          <div className="time-control">
            <p className="time-onplay">11:20</p>
            <div className="control-music-onplay">
              <i
                id="prev-music-onplay"
                className="fa fa-backward-step"
                // onClick={prevBtnClick}
              ></i>
              <i
                className="play-music-onplay fa fa-circle-play" // isPlaying
                // : "play-music-onplay fa fa-pause"

                // onClick={playBtnClick}
              ></i>
              <i
                id="next-music-onplay"
                className="fa fa-backward-step"
                // onClick={nextBtnClick}
              ></i>
            </div>
            <p className="time-onplay color-oringe-dark">4:50</p>
          </div>
        </div>
      </div>

      {/*  main contanier  */}
      <div className="w-4/5 h-full overflow-hidden">
        <div className="w-full px-3 py-2 flex flex-row justify-between items-center gap-6">
          {/* profile */}
          <div className="w-4/12 flex flex-row justify-center items-center gap-6 overflow-hidden">
            <div className="w-full h-9 flex flex-row justify-start items-center gap-3 bg-gray-600/50 rounded-lg overflow-hidden">
              <img
                src="/u4.png"
                alt="/profile1.png"
                className="h-full shadow-xl rounded-lg object-cover"
              />
              <p className="bg-transparent text-sm text-gray-400">Danil Moyu</p>

              <i className="fa fa-angle-down text-sm text-gray-400"></i>

            </div>
            <i className="fa fa-bell text-gray-400"></i>
          </div>

          {/* search box */}
          <div className="w-full py-2 px-3 flex flex-row justify-center items-center gap-3 bg-gray-600/50 rounded-lg">
            <i className="fa fa-search text-sm text-gray-400"></i>
            <input
              type="text"
              className="bg-transparent text-sm text-gray-400"
              placeholder="Search Music or Singer"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
