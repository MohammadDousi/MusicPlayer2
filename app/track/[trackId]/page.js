let data = {};
let formData = new FormData();

export default async function trackId({ params }) {
  formData.append("fun", "getSingleSong");
  formData.append("id", params.trackId);

  data = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  return (
    <>
      {data &&
        data.map((items) => (
         
            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src={items.cover}
                alt={items.cover}
                className="w-[88px] h-28 object-cover rounded-full shadow-xl"
              />
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                {items.singer}
              </h2>
            </div>
          
        ))}

      {!data && (
        <h2 className="w-full text-white/70 text-sm text-center">
          Artists is not found
        </h2>
      )}
    </>
  );
}

async function postData(url = "", data) {
  const response = await fetch(
    url,
    { method: "POST", body: data },
    { next: { revalidate: 30 } }
  );
  return response.json();
}
