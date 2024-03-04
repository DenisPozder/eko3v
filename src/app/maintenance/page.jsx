import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import Layout from "@/components/Layout/Layout";
import React from "react";
import MaintenanceTopText from "./components/MaintenanceTopText/MaintenanceTopText";
import MaintenanceGrid from "./components/MaintenanceGrid/MaintenanceGrid";

export const metadata = {
  title: "Održavanje zelenila",
  description:
    "Jedna od najvažnijih stvari da bi bijke bile zdrave i cvetne, a trava zelena i gusta jeste pravilno održavanje i negovanje.",
};

const page = () => {
  return (
    <Layout>
      <main className="page_container">
        <HeaderTitle title="Održavanje & Uređenje" image="/maintenance/maintenanceHeaderImg.jpeg" />
        <MaintenanceTopText />
        <MaintenanceGrid />
      </main>
    </Layout>
  );
};

export default page;
