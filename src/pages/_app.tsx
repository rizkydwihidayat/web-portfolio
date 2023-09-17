import "@/styles/globals.css";
import App, { AppProps } from "next/app";
import Head from "next/head";
import { MainLayout } from "@/ui/components/layouts";
import { ConfigProvider } from "antd";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ConfigProvider>
        <MainLayout>
          <Head>
            <title>Web Portfolio</title>
          </Head>
          <AnimatePresence
            // exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ConfigProvider>
    </>
  );
};

export default MyApp;
