import Form from "@components/Form";
import Navbar from "@components/Navbar";
import Features from "@components/Sections/Features";
import Intro from "@components/Sections/Intro";
import Productivity from "@components/Sections/Productivity";
import Reviews from "@components/Sections/Reviews";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Propella Cup 2023
        </title>
        <meta name="description" content="Propella cup" />
        <link rel="icon" type="image/x-icon" href="/favicon-propella.jpg"/>
      </Head>
      <Navbar />
      <main>
        <Intro />
        <Productivity />
        <Reviews />
        <Features />
        <Form />
      </main>
    </>
  );
};

export default Home;
