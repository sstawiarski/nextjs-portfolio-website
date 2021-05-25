import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en" className="dark:bg-gray-800 bg-gray-100">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
                        rel="preload"
                        as="style"
                    />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="theme-color" content="#1F2838" />
                    <meta
                        name="description"
                        content="Shawn Stawiarski is a software engineer based in Pittsburgh, PA"
                    />
                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content="Shawn Stawiarski | Software Engineer" />
                    <meta
                        name="og:description"
                        property="og:description"
                        content="Shawn Stawiarski is a software engineer based in Pittsburgh, PA"
                    />
                    <meta property="og:site_name" content="Shawn Stawiarski | Software Engineer" />
                    <meta property="og:url" content="https://nextjs-portfolio-website.vercel.app" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Shawn Stawiarski | Software Engineer" />
                    <meta name="twitter:description" content="Personal portfolio website for Shawn Stawiarski" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
