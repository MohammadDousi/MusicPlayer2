import FavSinger from "@/components/singer/FavSinger";
import TitleContainer from "@/components/titleContainer/TitleContainer";
import NewTrack from "@/components/tracks/NewTrack";
import PopularTrack from "@/components/tracks/PopularTracks";
import TracksMore from "@/components/tracksMore/TracksMore";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col justify-start items-start gap-4">
        <TitleContainer title="new tracks" href={""} />
        <NewTrack />
      </section>

      <section className="w-full flex flex-col justify-start items-start gap-4">
        <TitleContainer title="favorite artists" href={`/singer`} />
        <FavSinger />
      </section>

      <section className="w-full flex flex-col justify-start items-start gap-4">
        <TitleContainer title="popular tracks" href={""} />
        <PopularTrack />
      </section>

    </>
  );
}
