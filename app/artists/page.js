import ItemArtists from "@/components/artists/ItemArtists";

export default async function AllArtists() {
  let formData = new FormData();
  formData.append("fun", "getAllArtists");

  const artists = await postData(
    "https://music.kaktusprog.ir/assets/php/function.php",
    formData
  );

  for (let [key, value] of formData) {
    formData.delete(key, value);
  }

  return (
    <>
      {artists == false && notFound()}
      <section className="w-full grid grid-cols-8 gap-5 overflow-auto">
        <ItemArtists data={artists} />
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
