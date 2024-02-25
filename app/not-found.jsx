import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <i className="fa fa-search text-8xl text-textColor/30 pr-7 mb-5"></i>
      <h2 className="text-primeryColor text-3xl font-bold capitalize">No result found</h2>
      <p className="text-textColor/70 text-base">
        No item found for this section.Maybe an error has occurred.Try again
        later.
      </p>
      <Link href="/" className="text-primeryColor hover:font-bold duration-300 capitalize">
        Return Home
      </Link>
    </div>
  );
}
