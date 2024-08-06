import Layout from "@/components/Layout/Layout";
import React from "react";
import DesignTopText from "./components/DesignTopText/DesignTopText";
import DesignGrid from "./components/DesignGrid/DesignGrid";
import GardenBanner from "@/components/GardenBanner/GardenBanner";

export const metadata = {
  title: "Projektovanje i izrada",
  description:
    "Sa našim pejzažnim arhitektom upotpunise viziju i san o svojoj zelenoj oazi ili ćemo vam je mi kreirati! Pre izrade projekta vrši se izlazak i snimanje terena...",
  openGraph: {
    title: "Projektovanje i izrada",
    desc: "Sa našim pejzažnim arhitektom upotpunise viziju i san o svojoj zelenoj oazi ili ćemo vam je mi kreirati! Pre izrade projekta vrši se izlazak i snimanje terena...",
    url: "https://www.eko-3v.rs/design",
    siteName: "Eko3v",
    images: {
      url: "/design/designGridImg2.jpg",
      width: 1260,
      height: 880,
    },
  },
};

const page = () => {
  return (
    <Layout>
      <main className="page_container">
        <DesignTopText />
        <DesignGrid />
        <GardenBanner image={"/design/designGridImg2.jpg"} />
      </main>
    </Layout>
  );
};

export default page;
