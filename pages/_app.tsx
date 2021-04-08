import { FC } from "react";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import "reflect-metadata";
import "../global.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Shawn Stawiarski | Software Engineer</title>
        </Head>
        <div className="max-w-screen-2xl mr-auto ml-auto">
            <Navbar Logo={null} link="/" />
            <Component {...pageProps} />
        </div>
    </>
);

export default App;
