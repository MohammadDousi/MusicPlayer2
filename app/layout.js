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
          <main className="w-4/5 h-full px-3 flex flex-col justify-start items-center gap-4 overflow-x-hidden z-10">
            <Header />
            {children}
          </main>

          <div className="w-1/5 p-3 h-full bg-slate-900 overflow-hidden rounded-2xl z-10">
            <Playlist />
            <Player />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
