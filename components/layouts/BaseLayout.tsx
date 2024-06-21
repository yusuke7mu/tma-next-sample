import { ReactNode } from "react";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./Header";
import MainMenu from "./MainMenu";
import { useRouter } from "next/router";
import { ModalManager } from "../elements/ModalManager";

const sans = Noto_Sans_JP({
  display: "swap",
  variable: "--font-sans-jp",
  subsets: ["latin"],
});

type BaseLayoutProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const router = useRouter();

  return (
    <div
      className={`${sans.className} max-w-[640px] bg-white mx-auto h-screen`}
    >
      <div className="h-full flex flex-col">
        <Header />
        <main className="grow overflow-auto">{children}</main>
        <MainMenu />
      </div>
      <ModalManager />
    </div>
  );
};
