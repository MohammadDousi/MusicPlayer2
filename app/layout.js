import "../styles/globals.css";

import { Inter, Nunito, Ubuntu } from "next/font/google";

const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MusicLand - Momment Music Service 24/7",
  description: "Momment Music Service 24/7",
};

import Playlist from "@/components/playlist/Playlist";
import Player from "@/components/player/Player";
import Header from "@/components/header/Header";
import { ReduxProvider } from "./redux/provider";
import BackImage from "@/components/backImage/BackImage";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <ReduxProvider>
          <main className="w-full md:w-4/5 h-full md:px-3 flex flex-col justify-start items-center gap-4 overflow-x-hidden">
            <Header />
            {children}
          </main>

          <div className="hidden w-full md:w-1/5 h-full p-3 absolute flex flex-col justify-start items-start bg-slate-900 overflow-hidden z-10">
            <Playlist />
            <Player />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
