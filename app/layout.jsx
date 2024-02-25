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
        <ProviderQuery>
          <ReduxProvider>
            <main className="w-full bg-red-30 h-svh lg:h-full flex flex-row justify-start items-start gap-7">
              <Sidebar />
              <div className="w-full h-full lg:h-screen px-6 py-10 lg:p-0 lg:pr-6 lg:pt-5 lg:pb-24 flex flex-col justify-start items-start gap-10 overflow-x-hidden">
                {children}
              </div>
              <MiniPlayer />
            </main>
          </ReduxProvider>
        </ProviderQuery>
      </body>
    </html>
  );
}
