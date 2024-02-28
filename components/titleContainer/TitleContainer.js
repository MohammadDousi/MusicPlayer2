import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
    <div className="w-full relative flex flex-col justify-start items-center gap-2 *:select-none">
      <div className="w-full relative flex flex-row justify-between items-center">
        <h1 className="text-textColor/90 text-2xl lg:text-3xl font-bold capitalize">
          {title}
        </h1>

        {href && (
          <Link
            href={href}
            className="h-8 px-3 text-textColor/80 hover:text-primeryColor border border-textColor/80 hover:border-primeryColor hover:bg-textColor/10 rounded-full text-sm font-normal capitalize"
          >
            see all
          </Link>
        )}
      </div>
      <hr className="w-full h-0.5 bg-textColor/10 rounded-full" />
    </div>
  );
}
