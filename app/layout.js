import "../styles/globals.css";

import { Inter, Nunito, Ubuntu } from "next/font/google";

const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MusicLand - Momment Music Service 24/7",
  description: "Momment Music Service 24/7",
};

import Header from "@/components/header/Header";
import { ReduxProvider } from "./redux/provider";
import BackImage from "@/components/backImage/BackImage";
import PlayListContainer from "@/components/playlist/PlayListContainer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <ReduxProvider>
          <main className="w-full md:w-4/5 h-full md:px-3 flex flex-col justify-start items-center gap-4 overflow-x-hidden">
            <Header />
            {children}
          </main>

          <PlayListContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
