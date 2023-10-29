
export default async function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5 rounded-xl">
      <div className="w-full flex flex-row justify-center items-center gap-2">
        <div className="circleLoading"></div>
        <div className="circleLoading"></div>
        <div className="circleLoading"></div>
        <div className="circleLoading"></div>
        <div className="circleLoading"></div>
      </div>

      <p className="text-lg font-normal text-white/70 tracking-wide">Loading...</p>
    </div>
  );
}


