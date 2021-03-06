import Head from "next/head";
import Dashboard from "./dashboard";
import { getSession, useSession } from "next-auth/react";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Revamp AI</title>
        <meta
          name="Docs but with AI"
          content="Powerful Content marketing tool with AI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <Dashboard />
      
      
    </div>
  );
}




export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
