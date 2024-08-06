"use client";

import MaintenanceGridData from "@/Data/MaintenanceData";
import React, { useEffect, useState } from "react";
import styles from "./ms-hero.module.css";

const MSHero = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (params.slug && MaintenanceGridData) {
        const maintenanceItem = MaintenanceGridData.find(
          (item) => item.slug === params.slug
        );
        setData(maintenanceItem);
      }
    };
    fetchData();
  }, [params.slug]);

  return (
    <div className={styles.ms_hero}>
      <div className={styles.ms_hero_content}>
        {data ? (
          <>
            <div className={styles.ms_hero_img}>
              <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.ms_hero_text}>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MSHero;
