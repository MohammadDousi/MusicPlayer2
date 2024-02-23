import "./globals.css";

import { Nunito } from "next/font/google";
const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MusicLand",
  description: "Momment Music Service 24/7",
};

import { ReduxProvider } from "./redux/provider";
import MiniPlayer from "@/components/playlist/MiniPlayer";
import Sidebar from "@/components/sideBar/Sidebar";
import ProviderQuery from "./providerQuery";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <ReduxProvider>
          <ProviderQuery>
            <Sidebar />
            <main className="w-full h-screen flex flex-row justify-start items-center gap-10 overflow-x-hidden">
              {children}
            </main>
            <MiniPlayer />
          </ProviderQuery>
        </ReduxProvider>
      </body>
    </html>
  );
}
