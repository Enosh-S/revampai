import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Container from "../components/Container";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

       <SessionProvider session={session}>
        <Container>
          <Component {...pageProps} />
        </Container>
        </SessionProvider>
      
    </>
  );
}

export default MyApp;
