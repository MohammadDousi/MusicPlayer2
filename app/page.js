import Image from "next/image";
import Header from "@/components/header/Header";

import ItemArtists from "@/components/artists/ItemArtists";
import Playlist from "@/components/playlist/Playlist";
import Player from "@/components/player/Player";
import next from "next";

let artists = {};
let formData = new FormData();
async function postData(url = "", data) {
  const response = await fetch(
    url,
    { method: "POST", body: data },
    { next: { revalidate: 30 } }
  );
  return response.json();
}

export default async function Home() {
  formData.append("fun", "newset");
  artists = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  for (let [key, value] of formData) {
    formData.delete(key, value);
  }
  
  {
    /* {res.map((item) => (
        <h2 className="text-white text-4xl w-full text-center">
          {item.name}
        </h2>
      ))} */
  }

  return (
    <main className="w-full h-full p-3 flex flex-row-reverse justify-center items-center gap-2 ">
      {/*  sidebar playlist - playlist - player */}

      <div className="w-1/5 p-3 h-full bg-slate-950/50 overflow-hidden rounded-2xl">
        <Playlist />
        <Player />
      </div>

      <section className="w-4/5 h-full px-3 flex flex-col justify-start items-center gap-4 overflow-auto">
        {/*  search box and profile  */}
        <Header />

        {/*  main contanier  */}
        <section className="w-full h-full px-3 flex flex-col justify-start items-center gap-10 overflow-auto">
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
            <div className="w-full flex flex-row justify-between items-center pb-2 border-b border-slate-700">
              <h1 className="text-white/70 text-lg capitalize">
                favorite artists
              </h1>

              <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                see all
              </h1>
            </div>

            <section className="w-full flex flex-row justify-start items-start gap-5">
              <ItemArtists data={artists} />
            </section>
          </section>

          {/* recommended for you */}

          <section className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full flex flex-row justify-between items-center pb-2 border-b border-slate-700">
              <h1 className="text-white/70 text-lg capitalize">
                recommended for you
              </h1>

              <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                see all
              </h1>
            </div>

            <section className="w-full flex flex-row justify-start items-start gap-5">
              <div className="w-1/4 px-3 py-2 relative flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
                <img
                  src="/banner.jpg"
                  alt="/banner.jpg"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                  my favorite songs
                </h2>

                <div className="w-9 h-9 absolute bottom-8 right-10 flex flex-row justify-center items-center backdrop-blur-sm bg-white/30 rounded-full">
                  <i className="fa fa-play text-white text-sm pl-[2px]"></i>
                </div>
              </div>

              <div className="w-1/4 px-3 py-2 relative flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
                <img
                  src="/banner2.jpg"
                  alt="/banner2.jpg"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                  house music festival
                </h2>
                <div className="w-9 h-9 absolute bottom-8 right-10 flex flex-row justify-center items-center backdrop-blur-sm bg-white/30 rounded-full">
                  <i className="fa fa-play text-white text-sm pl-[2px]"></i>
                </div>
              </div>

              <div className="w-1/4 px-3 py-2 relative flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
                <img
                  src="/banner.jpg"
                  alt="/banner.jpg"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                  my favorite songs
                </h2>

                <div className="w-9 h-9 absolute bottom-8 right-10 flex flex-row justify-center items-center backdrop-blur-sm bg-white/30 rounded-full">
                  <i className="fa fa-play text-white text-sm pl-[2px]"></i>
                </div>
              </div>

              <div className="w-1/4 px-3 py-2 relative flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
                <img
                  src="/banner2.jpg"
                  alt="/banner2.jpg"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
                  house music festival
                </h2>
                <div className="w-9 h-9 absolute bottom-8 right-10 flex flex-row justify-center items-center backdrop-blur-sm bg-white/30 rounded-full">
                  <i className="fa fa-play text-white text-sm pl-[2px]"></i>
                </div>
              </div>
            </section>
          </section>

          {/* Recently play */}

          <section className="w-full flex flex-row justify-start items-start gap-5">
            <div className="w-1/2 px-3 py-2 bg-slate-950/50 rounded-2xl">
              <div className="w-full px-3 pb-3 flex flex-row justify-between items-center">
                <h1 className="text-white/70 text-lg capitalize">
                  Billboard top 100
                </h1>

                <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                  see all
                </h1>
              </div>

              <div className="w-full h-auto px-3 flex flex-col justify-center items-start gap-3">
                {/*  items songs */}
                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 px-3 py-2 bg-slate-950/50 rounded-2xl">
              <div className="w-full px-3 pb-3 flex flex-row justify-between items-center">
                <h1 className="text-white/70 text-lg capitalize">
                  Recently play
                </h1>

                <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                  see all
                </h1>
              </div>

              <div className="w-full h-auto px-3 flex flex-col justify-center items-start gap-3">
                {/*  items songs */}
                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>

                <div className="w-full h-14 flex flex-row justify-between items-center pb-3 border-b border-slate-700/50">
                  <div className="flex h-full flex-row justify-center items-center gap-4">
                    <img
                      src="image/coverSongs/cover.jpg"
                      alt="cover.jpg"
                      className="h-full object-cover rounded-lg shadow-xl"
                    />

                    <div className="flex flex-col justify-start items-start mt-1">
                      <p className="text-white/70 text-sm">Tulsa Jesus Freak</p>
                      <p className="text-white/30 text-xs">Lana del Ray</p>
                    </div>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-xs text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
