import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import Layout from "@/components/Layout/Layout";
import React from "react";
import MaintenanceTopText from "./components/MaintenanceTopText/MaintenanceTopText";
import MaintenanceGrid from "./components/MaintenanceGrid/MaintenanceGrid";

export const metadata = {
  title: "Održavanje zelenila",
  description:
    "Jedna od najvažnijih stvari da bi bijke bile zdrave i cvetne, a trava zelena i gusta jeste pravilno održavanje i negovanje.",
  openGraph: {
    title: "Održavanje zelenila",
    desc: "Jedna od najvažnijih stvari da bi bijke bile zdrave i cvetne, a trava zelena i gusta jeste pravilno održavanje i negovanje.",
    url: "https://www.eko-3v.rs/maintenance",
    siteName: "Eko3v",
    images: {
      url: "/maintenance/maintenanceGridImg4.jpg",
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
          title="Održavanje & Uređenje"
          image="/maintenance/maintenanceHeaderImg.jpeg"
        />
        <MaintenanceTopText />
        <MaintenanceGrid />
      </main>
    </Layout>
  );
};

export default page;
