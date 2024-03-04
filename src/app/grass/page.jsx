import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import Layout from "@/components/Layout/Layout";
import React from "react";
import TopText from "./components/TopText/TopText";
import GrassGrid from "./components/GrassGrid/GrassGrid";

export const metadata = {
  title: "Trava i biljke",
  description:
    "Sejanje travnjaka je ključni korak ka stvaranju zelene oaze. Pažljivo birana semena, pravilno pripremljena zemlja i pravilna nega doprinose formiranju gustog...",
};

const page = () => {
  return (
    <Layout>
      <main className="page_container">
        <HeaderTitle image={"/grass/headerTitleGrass.jpg"} title={"Trava&Biljke"} />
        <TopText />
        <GrassGrid />
      </main>
    </Layout>
  );
};

export default page;
