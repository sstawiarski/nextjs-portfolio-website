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
        <div className="w-screen mr-auto ml-auto pb-10 min-w-min dark:text-gray-300">
            <div className="max-w-screen-2xl ml-auto mr-auto">
                <Navbar Logo={null} link="/" />
                <hr className="mt-1 sm:mt-3 mb-2 w-full md:w-10/12 ml-auto mr-auto dark:border-gray-600" />
                <Component {...pageProps} />
            </div>
        </div>
    </>
);

export default App;
