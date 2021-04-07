import Document, { Html, Head, Main, NextScript } from 'next/document';

import Navbar from '../components/Navbar/Navbar';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="max-w-screen-2xl mr-auto ml-auto">
                    <Navbar Logo={null} link="/" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
