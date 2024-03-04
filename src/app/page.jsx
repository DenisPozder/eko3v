import GardenBanner from "@/components/GardenBanner/GardenBanner";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Hero from "./components/Hero/Hero";
import OurSpecialties from "./components/OurSpecialties/OurSpecialties";
import styles from "./page.module.css";
import Layout from "@/components/Layout/Layout";

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
