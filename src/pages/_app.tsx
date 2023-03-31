import { Fragment } from "react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/global.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
                <Head>
                <title>Your new gang</title>
                <meta    
					name="viewport"     
					content="initial-scale=1.0, width=device-width"  
				/>   
                <link rel="icon" href="/favicon.svg" />
                <meta
                    name="description"
                    content="Nerdboard recruitment task for JavaScript Developer trainee."
                />
            </Head>
            <main className={inter.className}>
                <Component {...pageProps} />;
            </main>
        </Fragment>
    );
}
