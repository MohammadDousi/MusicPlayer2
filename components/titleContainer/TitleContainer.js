import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
    <div className="w-full px-3 lg:px-0 flex flex-col justify-start items-start gap-2">
    
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="text-white/80 text-2xl font-bold capitalize tracking-wide">{title}</h1>

        {href && (
          <Link
            href={`/${href}`}
            className="text-white/50 text-sm capitalize rounded-full cursor-pointer duration-300 hover:text-primeryColor"
          >
            see all
          </Link>
        )}
      </div>

      <hr className="w-full h-0.5 bg-textColor/10 rounded-full" />
    </div>
  );
}
