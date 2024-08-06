"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const HeaderLinks = [
  {
    title: "Početna",
    href: "/",
  },
  {
    title: "Trava&Biljke",
    href: "/trava-i-biljke",
  },
  {
    title: "Projektovanje&Izrada",
    href: "/projektovanje-i-izrada",
  },
  {
    title: "Održavanje",
    href: "/odrzavanje-zelenila",
  },
  {
    title: "O nama",
    href: "/o-nama",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];

const Header = () => {
  // Define active link and add a .active class if link is active
  const pathname = usePathname();

  // Change header styles on scroll
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  useEffect(() => {
    const HeaderChangeOnScroll = () => {
      if (window.scrollY > 0) {
        setHeaderOnScroll(true);
      } else {
        setHeaderOnScroll(false);
      }
    };

    window.addEventListener("scroll", HeaderChangeOnScroll);

    return () => {
      window.removeEventListener("scroll", HeaderChangeOnScroll);
    };
  }, []);

  // Show / Hide links tablets and mobiles
  const [showHeader, setShowHeader] = useState(false);

  const toggleHeader = () => {
    setShowHeader(!showHeader);
  };

  const closeHeader = () => {
    setShowHeader(false);
  };

  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -60px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, []);

  return (
    <>
      <header
        className={`${styles.header_container} ${
          headerOnScroll ? styles.change : ""
        }`}
      >
        <div className={styles.header_content}>
          <div className={styles.header_bars} onClick={toggleHeader}>
            <RiMenu2Fill />
          </div>
          <div className={styles.header_logo}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div
            className={`${styles.header_links} ${
              showHeader ? styles.show : ""
            }`}
          >
            <div className={styles.header_close} onClick={closeHeader}>
              <IoIosClose />
            </div>
            {HeaderLinks.map((link, index) => (
              <Link
                className={pathname === link.href ? styles.active : ""}
                href={link.href}
                key={index}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Link href={"tel:0621612007"} className={styles.header_mobile_icon}>
            <FaPhoneAlt />
          </Link>
          <Link href={"tel:0621612007"} className={styles.header_mobile}>
            Pozovite nas
          </Link>
        </div>
      </header>
      <div
        className={`${styles.mobile_header_links} ${
          showHeader ? styles.show : ""
        }`}
      >
        <div className={styles.mobile_header_close} onClick={closeHeader}>
          <IoIosClose />
        </div>
        {HeaderLinks.map((link, index) => (
          <Link
            className={pathname === link.href ? styles.active : ""}
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
