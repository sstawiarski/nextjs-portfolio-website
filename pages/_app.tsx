import { FC } from "react";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import "reflect-metadata";
import "../global.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <div className="max-w-screen-2xl mr-auto ml-auto">
        <Navbar Logo={null} link="/" />
        <Component {...pageProps} />
    </div>
);

export default App;
