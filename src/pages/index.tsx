import { type NextPage } from "next";
import Head from "next/head";
// import { SignOutButton, SignInButton, useUser } from "@clerk/nextjs"
import Background from "./components/Background.js";
import Menu from "./components/Menu.js";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // const user = useUser()

  return (
    <>
      <Head>
        <title>Ramsey van der Meer</title>
        <meta name="description" content="Ramsey van der Meer - portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="relative h-width left-0 right-0 flex h-screen overflow-hidden border-slate-300 bg-gradient-to-b from-[#110811] to-[#000000]">
        {/* {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />} */}
        <div>
          <Menu />
          <Background />
        </div>
      </main>
    </>
  );
};

export default Home;
