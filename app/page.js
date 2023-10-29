import ItemArtists from "@/components/artists/ItemArtists";
import TitleContainer from "@/components/titleContainer/TitleContainer";
import Link from "next/link";

import NewTracks from "@/components/newTracks/NewTracks";
import Loading from "./loading";

let formData = new FormData();

export default async function Home() {
  formData.append("fun", "getFavoriteArtists");
  const artists = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  formData.append("fun", "getRecentlySongs");
  const recentlySong = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  return (
    <>
      <section className="w-full flex flex-col justify-start items-center gap-10 overflow-auto">
        {/* favorite artists */}
        <section className="w-full flex flex-col justify-start items-start gap-3">
          <TitleContainer title="favorite artists" href="artists" />

          <section className="w-full grid grid-cols-8 gap-5 overflow-auto">
            <ItemArtists data={artists} />
          </section>
        </section>

        {/* new track */}

        <section className="w-full flex flex-col justify-start items-start gap-3">
          <TitleContainer title="new track" href="" />

          <NewTracks recentlySong={recentlySong} />
        </section>

        {/* recommended for you */}

        <section className="w-full flex flex-col justify-start items-start gap-3">
          <TitleContainer title="recommended for you" href="" />

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
          <div className="w-1/2 p-5 bg-slate-700/50 rounded-2xl">
            <div className="w-full pb-6 flex flex-row justify-between items-center">
              <h1 className="text-white/70 text-2xl font-bold capitalize">
                New Track
              </h1>

              <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                see all
              </h1>
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-4">
              {recentlySong.map((song) => (
                <div
                  key={song.id}
                  className="w-full h-14 flex flex-row justify-between items-center bg-slate-700/50 hover:bg-slate-600/50 duration-300 rounded-xl"
                >
                  <Link href={`/track/${song.id}`} className="h-full">
                    <img
                      src={song.cover}
                      alt={song.cover}
                      className="h-full object-cover rounded-lg shadow-xl"
                    />
                  </Link>

                  <div className=" w-full flex flex-row justify-between items-center px-5">
                    <div className="flex flex-row justify-center items-center gap-5">
                      <i className="fa fa-play text-white cursor-pointer"></i>
                      <p className="text-white/70 text-sm font-bold tracking-wider">
                        <Link key={song.id} href={`/track/${song.id}`}>
                          {song.name}
                        </Link>
                      </p>
                      <p className="text-white/40 text-sm tracking-wide">
                        {song.singer}
                      </p>
                    </div>
                    {/*  btn more and time song */}
                    <div className="flex flex-row justify-center items-center gap-5">
                      <p className="text-sm text-white/40">4:35</p>
                      <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2 p-5 bg-slate-950/50 rounded-2xl">
            <div className="w-full pb-6 flex flex-row justify-between items-center">
              <h1 className="text-white/70 text-2xl font-bold capitalize">
                Recently play
              </h1>

              <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
                see all
              </h1>
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-4">
              {/*  items songs */}
              <div className="w-full h-14 flex flex-row justify-between items-center bg-slate-700/30 hover:bg-slate-600 duration-300 rounded-xl">
                <img
                  src="image/coverSongs/cover.jpg"
                  alt="image/coverSongs/cover.jpg"
                  className="h-full object-cover rounded-lg shadow-xl"
                />

                <div className=" w-full h-full flex flex-row justify-between items-center px-5">
                  <div className="flex flex-row justify-center items-center gap-5">
                    <i className="fa fa-play text-white cursor-pointer"></i>
                    <p className="text-white/70 text-sm font-bold tracking-wider">
                      Tulsa Jesus Freak
                    </p>
                    <p className="text-white/40 text-sm tracking-wide">
                      Lana del Ray
                    </p>
                  </div>
                  {/*  btn more and time song */}
                  <div className="flex flex-row justify-center items-center gap-5">
                    <p className="text-sm text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

async function postData(url = "", data) {
  const res = await fetch(url, {
    method: "POST",
    body: data,
    next: { revalidate: 0 },
  });

  if (!res.ok) return undefined;

  return res.json();
}
