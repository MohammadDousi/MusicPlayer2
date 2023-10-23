import "../styles/globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MusicLand - Momment Music Service 24/7",
  description: "Momment Music Service 24/7",
};

import Playlist from "@/components/playlist/Playlist";
import Player from "@/components/player/Player";
import Header from "@/components/header/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-4/5 h-full px-3 flex flex-col justify-start items-center gap-4">
          <Header />
          <section className="w-full h-full flex flex-col justify-start items-center gap-4 overflow-auto">
            {children}
          </section>
        </main>
        <div className="w-1/5 p-3 h-full bg-slate-950/50 overflow-hidden rounded-2xl">
          <Playlist />
          <Player />
        </div>
      </body>
    </html>
  );
}
