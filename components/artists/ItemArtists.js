import Link from "next/link";
import Image from "next/image";
export default function Artists(props) {
  const { data } = props;
  return (
    <>
      {data &&
        data.map((items) => (
          <Link key={items.id} href={`/track/${items.id}`}>
            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-700/50 hover:bg-slate-700 duration-300 rounded-2xl">
              <img
                src={`https://music.kaktusprog.ir/assets/file/artistsAvator/${items.avator}`}
                alt={`https://music.kaktusprog.ir/assets/file/artistsAvator/${items.avator}`}
                className="w-[88px] h-28 object-cover rounded-full shadow-xl"
              />

              <h2 className="text-white/40 text-xs font-normal capitalize ">
                {items.name}
              </h2>
            </div>
          </Link>
        ))}

      {!data && (
        <h2 className="w-full text-white/70 text-sm text-center">
          Artists is not found
        </h2>
      )}
    </>
  );
}
