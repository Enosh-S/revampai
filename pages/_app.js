import Head from "next/head";
import Container from "../components/Container";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Container>
      <Component {...pageProps} />
    </Container>
    </>
  );
}

export default MyApp;
