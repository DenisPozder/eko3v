import Image from 'next/image'
import styles from './hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <Image src={'/home/heroImg.jpeg'} alt='Slika hiro sekcije' loading='lazy' fill="full" />
      <div className={styles.hero_overlay}>
        <div className={styles.hero_margin}>
          <div className={styles.hero_content}>
            <h1>Napravićemo vaš eksterijer raskošnim</h1>
            <p>Uređenje prostora za vaš dom ili posao</p>
            <Link href={"tel:0621612007"}>Pozovite nas!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero