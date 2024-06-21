import { TelegramProvider } from "@/features/telegram/context/TelegramProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TelegramProvider>
      <Component {...pageProps} />
    </TelegramProvider>
  );
};

export default App;
