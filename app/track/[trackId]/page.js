import { notFound } from "next/navigation";

let formData = new FormData();

export default async function trackId({ params }) {
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
      {data && (
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

      {!data || (data == "idNotFound" && notFound())}
    </>
  );
}

async function postData(url = "", data) {
  const res = await fetch(
    url,
    { method: "POST", body: data },
    { next: { revalidate: 30 } }
  );

  if (!res.ok || res === "idNotFound") return undefined;

  return res.json();
}
