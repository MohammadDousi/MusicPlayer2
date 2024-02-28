import ProviderQuery from "./providerQuery";
import { ReduxProvider } from "./redux/providerRedux";
import Player from "@/components/playlist/Player";

import "./globals.css";

import { Nunito } from "next/font/google";
import Sidebar from "@/components/sideBar/Sidebar";
const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "musicLand",
  description: "music land 24/7 online services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <ProviderQuery>
          <ReduxProvider>
            <main className="w-full h-full min-h-lvh lg:h-full relative flex flex-row justify-start items-start overflow-hidden">
              <Sidebar />
              <section className="w-full h-full relative px-6 lg:pr-4 pt-5 pb-32 lg:pb-28 flex flex-col justify-start items-start gap-10 overflow-x-hidden">
                {children}
              </section>
              <Player />
            </main>
          </ReduxProvider>
        </ProviderQuery>
      </body>
    </html>
  );
}
