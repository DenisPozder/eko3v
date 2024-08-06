import Layout from "@/components/Layout/Layout";
import React from "react";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactForm from "./components/ContactForm/ContactForm";

export const metadata = {
  title: "Kontakt",
  description:
    "Dobijte vašu ponudu! Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor.",
  openGraph: {
    title: "Kontakt",
    desc: "Dobijte vašu ponudu! Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor.",
    url: "https://www.eko-3v.rs/contact",
    siteName: "Eko3v",
    images: {
      url: "/home/gardenBannerImg.jpg",
      width: 1260,
      height: 880,
    },
  },
};

const page = () => {
  return (
    <Layout>
      <main className="page_container">
        <ContactInfo />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default page;
