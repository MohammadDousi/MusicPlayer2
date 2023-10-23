import Link from "next/link";
import Image from "next/image";
export default function Artists(props) {
  const { data } = props;

  return (
    <>
      {data &&
        data.map((items) => (
          <Link href={`/track/${items.id}`}>
            <div className="p-2 flex flex-col justify-center items-center gap-2 bg-slate-950/50 rounded-2xl">
              <img
                src={items.cover}
                alt={items.cover}
                className="w-[88px] h-28 object-cover rounded-full shadow-xl"
              />

              {/* <Image
                src={items.cover}
                alt={items.cover}
                className="w-[88px] h-28 object-cover rounded-full shadow-xl"
                quality={100}
                width={0}
                height={0}
              /> */}
              <h2 className="text-white/40 text-xs font-normal capitalize ">
                {items.singer}
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
