"use client"

import Link from 'next/link'
import styles from './footer.module.css'
import { usePathname } from 'next/navigation'
import Logo from '../Logo/Logo'

const FooterLinks = [
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
]

const Footer = () => {

  const pathname = usePathname()

  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_column}>
          {
            FooterLinks.map((link, index) => (
              <Link href={link.href} key={index} className={pathname === link.href ? styles.active : ''}>{link.title}</Link>
            ))
          }
        </div>
        <div className={styles.footer_column}>
          <Link href={"/"}><Logo /></Link>
        </div>
        <div className={styles.footer_column}>
          <h3>Kontaktirajte nas!</h3>
          <p><Link href={"tel:0621612007"}>0621612007</Link></p>
          <p>eko3ve@gmail.com</p>
          <p>trivicmladen@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer