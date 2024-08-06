"use client";

import GrassGridData from "@/Data/GrassData";
import React, { useEffect, useState } from "react";
import styles from './gs-hero.module.css'

const GSHero = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (params.slug && GrassGridData) {
        const grassItem = GrassGridData.find(
          (item) => item.slug === params.slug
        );
        setData(grassItem);
      }
    };
    fetchData();
  }, [params.slug]);

  return (
    <div className={styles.gs_hero}>
      <div className={styles.gs_hero_content}>
        {data ? (
          <>
            <div className={styles.gs_hero_img}>
              <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.gs_hero_text}>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default GSHero;
