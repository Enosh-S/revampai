import Head from 'next/head'


import Dashboard from './dashboard'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Revamp AI</title>
        <meta name="Docs but with AI" content="Powerful Content marketing tool with AI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Dashboard/>

      
    </div>
  )
}
