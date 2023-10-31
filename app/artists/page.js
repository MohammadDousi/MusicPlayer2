import TitleContainer from "@/components/titleContainer/TitleContainer";
import ItemArtists from "@/components/artists/ItemArtists";

export default async function AllArtists() {
  let formData = new FormData();
  formData.append("fun", "getAllArtists");

  const artists = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  const popArtists = artists.filter((item) => item.geners === "pop");
  const rapArtists = artists.filter((item) => item.geners === "rap");
  const rockArtists = artists.filter((item) => item.geners === "rock");

  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  return (
    <>
      {artists == false && notFound()}

      <section className="w-full pt-3 flex flex-col justify-start items-center gap-10 overflow-auto">
        {artists && (
          <section className="w-full flex flex-col justify-start items-start gap-3">
            <TitleContainer title="Pop Artists" href="" />

            <section className="w-full grid grid-cols-8 gap-5 overflow-auto">
              <ItemArtists data={popArtists} />
            </section>
          </section>
        )}

        {artists && (
          <section className="w-full flex flex-col justify-start items-start gap-3">
            <TitleContainer title="Rap Artists" href="" />

            <section className="w-full grid grid-cols-8 gap-5 overflow-auto">
              <ItemArtists data={rapArtists} />
            </section>
          </section>
        )}

        {artists && (
          <section className="w-full flex flex-col justify-start items-start gap-3">
            <TitleContainer title="Rock Artists" href="" />

            <section className="w-full grid grid-cols-8 gap-5 overflow-auto">
              <ItemArtists data={rockArtists} />
            </section>
          </section>
        )}
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
