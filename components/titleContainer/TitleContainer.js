import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
    <div className="w-full relative flex flex-col justify-between items-center gap-2">
      <div className="w-full relative flex flex-row justify-between items-center">
        <h1 className="text-textColor/90 text-2xl lg:text-3xl font-bold capitalize">
          {title}
        </h1>

        {href && (
          <button className="text-textColor/90 text-sm font-normal capitalize">
            {<Link href={href}>see all</Link>}
          </button>
        )}
      </div>
      <hr className="w-full h-0.5 bg-textColor/10 rounded-full" />
    </div>
  );
}
