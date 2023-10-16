import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-3 flex flex-row justify-center items-center gap-1">
      <div className="w-1/5 h-full bg-slate-950 rounded-xl overflow-hidden">
        {/*  playlist */}
        <div className="w-full h-1/2 p-2 flex flex-col">
          <div className="w-full h-auto overflow-auto">
            <div className="w-full h-16 p-3 flex flex-row justify-between items-center gap-3 rounded-xl overflow-hidden">
              <img src="/cover.jpg" className="w-11 object-cover rounded-lg" />
              <div className="w-3/4 h-full mt-1 flex flex-col flex-nowrap justify-center items-start">
                <p className="text-white/70 text-sm font-bold">
                  Tulsa Jesus Freak
                </p>
                <p className="text-white/25 text-sm ">Lana del Ray</p>
              </div>

              <div className="flex flex-row justify-center items-center gap-3">
                <i className="fa fa-trash text-sm text-white/20 hover:text-white cursor-pointer"></i>
                <i className="fa fa-circle-play text-lg text-white/20 hover:text-white cursor-pointer"></i>
              </div>
            </div>

            <div className="w-full h-16 p-3 flex flex-row justify-between items-center gap-3 bg-gradient-to-r from-cyan-500/60 to-purple-500/20  rounded-xl overflow-hidden">
              <img src="/cover.jpg" className="w-11 object-cover rounded-lg" />
              <div className="w-3/4 h-full mt-1 flex flex-col flex-nowrap justify-center items-start">
                <p className="text-white/70 text-sm font-bold">
                  Tulsa Jesus Freak
                </p>
                <p className="text-white/25 text-sm ">Lana del Ray</p>
              </div>

              <div className="flex flex-row justify-center items-center gap-3">
                <i className="fa fa-trash text-sm text-white/20 hover:text-white cursor-pointer"></i>
                <i className="fa fa-circle-play text-lg text-white/20 hover:text-white cursor-pointer"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
