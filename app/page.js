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
      <div className="w-4/5 h-full px-3 flex flex-col justify-start items-center gap-6 overflow-auto">
        {/*  search box and profile  */}
        <div className="w-full py-2 flex flex-row justify-between items-center gap-6">
          {/* profile */}
          <div className="w-4/12 flex flex-row justify-center items-center gap-6 overflow-hidden">
            <div className="w-full h-9 flex flex-row justify-start items-center gap-3 bg-gray-600/50 rounded-lg overflow-hidden">
              <img
                src="/u4.png"
                alt="/profile2.png"
                className="h-full shadow-xl rounded-lg object-cover"
              />

              <div className="w-full flex flex-row justify-between items-center pr-4">
                <p className="bg-transparent text-sm text-gray-400 font-bold">
                  Danil Moyu
                </p>

                <i className="fa fa-angle-down text-sm text-gray-400"></i>
              </div>
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

        {/* banner */}
        {/* <div className="w-full flex flex-row justify-start items-start gap-6 rounded-xl shadow-lg">
          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            <img
              src="/banner.jpg"
              alt="/banner.png"
              className="w-full h-36 object-cover"
            />
          </div>

          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            <img
              src="/banner2.jpg"
              alt="/banner2.png"
              className="w-full h-36 object-cover"
            />
          </div>
        </div> */}

        {/* favorite artists */}
        <section className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex flex-row justify-between items-center py-2 border-b border-slate-700">
            <h1 className="text-white/70 text-lg capitalize">
              favorite artists
            </h1>

            <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
              see all
            </h1>
          </div>

          <section className="w-full flex flex-row justify-start items-start gap-5">
            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile1.png"
                alt="/profile1.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                drake
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile2.png"
                alt="/profile2.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                doja cat
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile5.png"
                alt="/profile5.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                dua lipa
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile4.png"
                alt="/profile4.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                lizzo
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile7.png"
                alt="/profile7.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                harry styles
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile8.png"
                alt="/profile8.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                ava max
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile6.png"
                alt="/profile6.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                mikle jakson
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile5.png"
                alt="/profile5.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                dua lipa
              </h2>
            </div>

            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/profile2.png"
                alt="/profile2.png"
                className="h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                dua lipa
              </h2>
            </div>
          </section>
        </section>

        {/* recommended for you */}

        <section className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex flex-row justify-between items-center py-2 border-b border-slate-700">
            <h1 className="text-white/70 text-lg capitalize">
              recommended for you
            </h1>

            <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
              see all
            </h1>
          </div>

          <section className="w-full flex flex-row justify-start items-start gap-6">
            <div className="w-1/4 px-3 py-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/banner.jpg"
                alt="/banner.jpg"
                className="w-full h-32 object-cover rounded-xl"
              />
              <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                my favorite songs
              </h2>
            </div>

            <div className="w-1/4 px-3 py-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/banner2.jpg"
                alt="/banner2.jpg"
                className="w-full h-32 object-cover rounded-xl"
              />
              <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                house music festival
              </h2>
            </div>

            <div className="w-1/4 px-3 py-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/banner.jpg"
                alt="/banner.jpg"
                className="w-full h-32 object-cover rounded-xl"
              />
              <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                my favorite songs
              </h2>
            </div>

            <div className="w-1/4 px-3 py-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src="/banner2.jpg"
                alt="/banner2.jpg"
                className="w-full h-32 object-cover rounded-xl"
              />
              <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                house music festival
              </h2>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
