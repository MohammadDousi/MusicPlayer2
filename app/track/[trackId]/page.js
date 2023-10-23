import { notFound } from "next/navigation";

let formData = new FormData();

export default async function trackId({ params }) {
  // get data on server
  formData.append("fun", "getSingleSong");
  formData.append("id", params.trackId);
  const data = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );
  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  return (
    <>
      <section className="w-full h-72 relative flex flex-row overflow-hidden rounded-2xl bg-slate-900/50">
        <img
          src={data[0].cover}
          alt={data[0].cover}
          className="w-full h-full z-0 absolute object-cover blur-xl opacity-30"
        />

        <section className="w-full h-full z-30 p-6 flex flex-row justify-start items-end gap-6 overflow-hidden">
          <img
            src={data[0].cover}
            alt={data[0].cover}
            className="h-full rounded-xl shadow-xl object-cover"
          />

          <div className="w-2/3 flex flex-col justify-start items-start gap-4 mb-5">
            <p className="w-full text-white text-5xl font-black capitalize">
              {data[0]?.name}
            </p>

            <p className="w-full text-white text-base font-normal capitalize tracking-wide">
              {`song by ${data[0]?.singer} . ${data[0]?.play} plays . ${data[0]?.slike} Likes . ${data[0]?.year}/${data[0]?.month}/${data[0]?.day} . 4:00 `}
            </p>

            {/* <div className="btn-box">
              <button>
                <i className="fa fa-play"></i>
                <p>Play Now</p>
              </button>
              <button>
                <i className="fa fa-bookmark"></i>
                <p>Bookmark</p>
              </button>
              <button>
                <i className="fa fa-heart"></i>
                <p>Like</p>
              </button>
              <button>
                <i className="fa fa-download"></i>
                <p>Download</p>
              </button>
              <button>
                <i className="fa fa-share"></i>
                <p>Share</p>
              </button>
            </div> */}

          </div>
        </section>
        
      </section>

      {/* <section className="lyrics-details">
        <div className="btn-details" onClick={showTextSong}>
          <p>Lyrics & Details</p>
          <i className="fa fa-angle-right"></i>
        </div>

        <div className="body-details" style={{ height: `${bodyTextHeight}%` }}>
          <p>{song?.text}</p>
        </div>
      </section> */}

      {/* {data && (
        <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
          <img
            src={data[0].cover}
            alt={data[0].cover}
            className="w-[88px] h-28 object-cover rounded-full shadow-xl"
          />
          <h2 className="text-white/40 text-xs font-normal capitalize ">
            {data[0].name}
          </h2>
        </div>
      )}

      {!data || (data == "idNotFound" && notFound())} */}
    </>
  );
}

async function postData(url = "", data) {
  const res = await fetch(
    url,
    { method: "POST", body: data },
    { next: { revalidate: 5 } }
  );

  if (!res.ok || res === "idNotFound") return undefined;

  return res.json();
}
