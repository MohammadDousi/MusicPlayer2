import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <i className="fa fa-search text-8xl text-cyan-200 pr-7 mb-5"></i>
      <h2 className="text-white text-3xl font-bold">No result found</h2>
      <p className="text-white/70 text-base">
        No item found for this section.Maybe an error has occurred.Try again
        later.
      </p>
      <Link href="/" className="text-cyan-500 hover:font-bold">
        Return Home
      </Link>
    </div>
  );
}
