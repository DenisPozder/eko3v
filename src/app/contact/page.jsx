import Layout from "@/components/Layout/Layout";
import React from "react";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactForm from "./components/ContactForm/ContactForm";

export const metadata = {
  title: "Kontakt",
  description:
    "Dobijte vašu ponudu! Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor.",
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
