import HeaderTitle from '@/components/HeaderTitle/HeaderTitle';
import Layout from '@/components/Layout/Layout';
import React from 'react'
import AboutTopGrid from './components/AboutTopGrid/AboutTopGrid';
import AboutMiddleGrid from './components/AboutMiddleGrid/AboutMiddleGrid';
import GardenBanner from '@/components/GardenBanner/GardenBanner';
import AboutSpecialties from './components/AboutSpecialties/AboutSpecialties';

export const metadata = {
  title: "O nama",
  description: "Ukratko o nama. Eko3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja...",
  openGraph: {
    title: "O nama",
    desc: "Ukratko o nama. Eko3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja...",
    url: "https://www.eko-3v.rs/about",
    siteName: "Eko3v",
    images: {
      url: "/about/aboutSliderImg1.jpg",
      width: 1260,
      height: 880
    }
  }
};

const page = () => {
  return (
    <Layout>
      <main className='page_container'>
        <HeaderTitle title={"O nama"} image={"/about/aboutHeaderTitle.jpg"} />
        <AboutTopGrid />
        <AboutMiddleGrid />
        <GardenBanner image={"/about/aboutBannerImg.jpg"} />
        <AboutSpecialties />
      </main>
    </Layout>
  )
}

export default page