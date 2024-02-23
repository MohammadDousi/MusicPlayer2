"use client";

import Image from "next/image";

import ItemArtists from "@/components/artists/ItemArtists";
import TitleContainer from "@/components/titleContainer/TitleContainer";
import Link from "next/link";
import { addPlaylist } from "@/app/redux/features/playlistSlice";

import NewTracks from "@/components/newTracks/NewTracks";
import { getRecentlySongs } from "@/hooks/querys";
import { useDispatch } from "react-redux";

export default function Home() {
  // formData.append("fun", "getFavoriteArtists");
  // const artists = await postData(formData);
  const recentlyTrack = getRecentlySongs("getRecentlySongs");
  // const recentlyTrack = await postData(
  //   "https://music.kaktusprog.ir/assets/php/function.php",
  //   formData
  // );
  const dispatch = useDispatch();
  recentlyTrack?.data?.data?.[0] &&
    dispatch(addPlaylist(recentlyTrack?.data?.data?.[0]));

  return (
    <section className="w-full pt-3 flex flex-col justify-start items-center gap-10">
      {/* favorite artists */}
      {/* <section className="w-full flex flex-col justify-start items-start gap-3">
        <TitleContainer title="favorite artists" href="artists" />

        <section className="w-full px-3 md:p-0 flex flex-row justify-start items-start gap-4 overflow-auto">
          <ItemArtists data={artists} />
        </section>
      </section> */}
      {/* new track */}

      <section className="w-full flex flex-col justify-start items-start gap-3">
        <TitleContainer title="new track" href="" />
        <NewTracks recentlyTrack={recentlyTrack?.data?.data} />
      </section>

      {/* recommended for you */}

      {/* <section className="w-full flex flex-col justify-start items-start gap-3">
        <TitleContainer title="recommended for you" href="" />

        <section className="w-full px-3 md:p-0 flex flex-row justify-start items-start gap-4 overflow-auto">
          <div className="w-64 md:w-1/4 px-3 py-2 relative flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
            <Image
              src="/banner.jpg"
              alt="/banner.jpg"
              className="w-full h-32 object-cover rounded-xl"
              width={500}
              height={500}
              quality={100}
            />

            <h2 className="w-full py-1 text-white/70 text-sm font-normal capitalize">
              my favorite songs
            </h2>

            <div className="w-9 h-9 absolute bottom-7 right-10 flex flex-row justify-center items-center backdrop-blur-sm bg-white/30 rounded-full">
              <i className="fa fa-play text-white text-sm pl-[2px]"></i>
            </div>
          </div>
        </section>
      </section> */}

      {/* Recently play */}

      {/* <section className="w-full p-3 md:p-0 flex flex-col md:flex-row justify-start items-start gap-5">
        <div className="w-full md:w-1/2 p-3 md:p-5 bg-slate-700/50 rounded-2xl">
          <div className="w-full pb-6 flex flex-row justify-between items-center">
            <h1 className="text-white/70 text-2xl font-bold capitalize">
              New Track
            </h1>

            <h1 className="text-white/40 mt-2 text-sm capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
              see all
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center items-start gap-4">
            {recentlyTrack.map((track) => (
              <div
                key={track?.id}
                className="w-full h-14 flex flex-row justify-between items-center bg-slate-700/50 hover:bg-slate-600/50 duration-300 rounded-xl pr-3"
              >
                <div className="flex flex-row justify-start items-center gap-3 md:gap-5">
                  <Link href={`/track/${track?.id}`} className="w-auto">
                    <Image
                      src={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                      alt={`https://music.kaktusprog.ir/assets/file/cover/${track?.cover}`}
                      className="w-14 h-14 object-cover rounded-lg shadow-xl"
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </Link>

                  <div className="flex flex-row justify-center items-center gap-5">
                    <i className="fa fa-play hidden md:block text-white cursor-pointer"></i>

                    <div className="w-full flex flex-col md:flex-row justify-start items-start">
                      <p className="text-white/70 text-sm font-bold tracking-wider">
                        <Link key={track?.id} href={`/track/${track?.id}`}>
                          {track?.name.length >= 23
                            ? `${track?.name.slice(0, 20)}...`
                            : track?.name}
                        </Link>
                      </p>
                      <p className="text-white/40 text-sm tracking-wide">
                        {track?.singer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-start items-center gap-5">
                  <p className="hidden md:block text-sm text-white/40">4:35</p>
                  <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-5 bg-slate-950/50 rounded-2xl">
          <div className="w-full pb-6 flex flex-row justify-between items-center">
            <h1 className="text-white/70 text-2xl font-bold capitalize">
              Recently play
            </h1>

            <h1 className="text-white/40 text-xs capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500">
              see all
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center items-start gap-4">
          </div>
        </div>
      </section> */}
    </section>
  );
}
