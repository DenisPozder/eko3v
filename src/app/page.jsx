import GardenBanner from "@/components/GardenBanner/GardenBanner";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Hero from "./components/Hero/Hero";
import OurSpecialties from "./components/OurSpecialties/OurSpecialties";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title: "Eko3V je firma sa decenijskim iskustvom u hortikulturi",
  description:
    "Eko3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja i održavanja...",
  openGraph: {
    title: "Eko3V je firma sa decenijskim iskustvom u hortikulturi",
    desc: "Eko3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja i održavanja...",
    url: "https://www.eko-3v.rs/",
    siteName: "Eko3v",
    images: {
      url: "/home/ourSpecialties.jpg",
      width: 1260,
      height: 880,
    },
  },
};

export default function Home() {
  return (
    <Layout>
      <main className="page_container">
        <Hero />
        <OurSpecialties />
        <AboutComponent />
        <GardenBanner image={"/home/gardenBannerImg.jpg"} />
      </main>
    </Layout>
  );
}
