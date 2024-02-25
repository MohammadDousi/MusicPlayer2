import Image from "next/image";

import TitleContainer from "@/components/titleContainer/TitleContainer";
import { notFound } from "next/navigation";
import PlayInTrackId from "@/components/playInTrackId/PlayInTrackId";

let formData = new FormData();

export async function generateMetadata({ params }) {
  formData.append("fun", "getSingleSong");
  formData.append("id", params.trackId);
  const data = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );
  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  if (data) {
    return {
      title: `${data.singer} - ${data.name} - MusicLand`,
      description: "Momment Music Service 24/7",
    };
  } else {
    return {
      title: "No result found - MusicLand",
      description: "Momment Music Service 24/7",
    };
  }
}

export default async function trackId({ params }) {
  // get data on server
  formData.append("fun", "getSingleSong");
  formData.append("id", params.trackId);
  const track = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );


  formData.append("fun", "getRecentlySongs");
  const recentlyTrack = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  return (
    <>
      {track == false && notFound()}

      {/* image  and name container */}

      {track && (
        <section className="w-full h-64 relative flex flex-row overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800 shadow-xl">
          <Image
            src={track?.cover}
            alt={track?.cover}
            className="w-full h-full z-0 absolute blur-3xl opacity-60 backdrop-blur-xl rounded-3xl object-cover"
            width={500}
            height={500}
            quality={100}
          />

          <section className="w-full h-full z-30 p-6 flex flex-row justify-start items-end gap-6 overflow-hidden">
            <div className="w-1/5 h-full flex justify-center items-center">
              <Image
                src={track?.cover}
                alt={track?.cover}
                className="rounded-xl shadow-xl object-cover"
                width={500}
                height={500}
                quality={100}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-4">
              <p className="w-full text-white text-5xl font-bold capitalize">
                {track?.name}
              </p>

              <p className="w-full text-white text-base font-normal capitalize tracking-wide">
                {`song by ${track?.singer} . ${track?.play} plays . ${track?.slike} Likes . ${track?.year}/${track?.month}/${track?.day} . 4:00 `}
              </p>
            </div>
          </section>
        </section>
      )}

      {/* play, share, download, like button container */}
      <PlayInTrackId track={track} />

      <div className="w-full flex flex-col justify-start items-start gap-5 rounded-2xl">
        <TitleContainer title="more songs" href="" />

        <div className="w-full h-auto flex flex-col justify-center items-start gap-4">
          {recentlyTrack &&
            recentlyTrack.map((track) => (
              <div
                key={track.id}
                className="w-full h-14 flex flex-row justify-between items-center bg-slate-700/30 hover:bg-slate-600 duration-300 rounded-xl"
              >
                <>
                  <div className="flex h-full flex-row justify-start items-center gap-4">
                    <Image
                      src={track?.cover}
                      alt={track?.cover}
                      className="w-14 h-14 object-cover rounded-lg shadow-xl"
                      width={500}
                      height={500}
                      quality={100}
                    />

                    <div className="flex flex-row justify-center items-center gap-10 pl-4">
                      <i className="fa fa-play text-white cursor-pointer"></i>
                      <p className="text-white/70 text-sm font-bold tracking-wider">
                        Tulsa Jesus Freak
                      </p>
                      <p className="text-white/40 text-sm tracking-wide">
                        Lana del Ray
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center gap-8 pr-4">
                    <p className="text-sm text-white/40">4:35</p>
                    <i className="fa fa-ellipsis-h text-lg text-white cursor-pointer duration-300 hover:text-cyan-500"></i>
                  </div>
                </>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// funcation get data on server and pass to trackId funcation
async function postData(url = "", data) {
  const res = await fetch(url, {
    method: "POST",
    body: data,
    next: { revalidate: 0 },
  });

  if (!res.ok) return undefined;

  return res.json();
}
