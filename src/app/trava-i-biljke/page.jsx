import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import Layout from "@/components/Layout/Layout";
import React from "react";
import TopText from "./components/TopText/TopText";
import GrassGrid from "./components/GrassGrid/GrassGrid";

export const metadata = {
  title: "Trava i biljke",
  description:
    "Sejanje travnjaka je ključni korak ka stvaranju zelene oaze. Pažljivo birana semena, pravilno pripremljena zemlja i pravilna nega doprinose formiranju gustog...",
  openGraph: {
    title: "Trava i biljke",
    desc: "Sejanje travnjaka je ključni korak ka stvaranju zelene oaze. Pažljivo birana semena, pravilno pripremljena zemlja i pravilna nega doprinose formiranju gustog...",
    url: "https://www.eko-3v.rs/grass",
    siteName: "Eko3v",
    images: {
      url: "/grass/grassGridImg5.png",
      width: 1260,
      height: 880,
    },
  },
};

const page = () => {
  return (
    <Layout>
      <main className="page_container">
        <HeaderTitle
          image={"/grass/headerTitleGrass.jpg"}
          title={"Trava&Biljke"}
        />
        <TopText />
        <GrassGrid />
      </main>
    </Layout>
  );
};

export default page;
