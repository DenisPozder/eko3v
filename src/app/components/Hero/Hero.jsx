import Image from 'next/image'
import styles from './hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <Image src={'/home/heroImg.jpeg'} alt='Slika hiro sekcije' loading='lazy' fill="full" />
      <div className={styles.hero_background_overlay}></div>
      <div className={styles.hero_overlay}>
        <div className={styles.hero_margin}>
          <div className={styles.hero_content}>
            <h1 className='slide-in slide-top'>Napravićemo vaš eksterijer raskošnim</h1>
            <p className='fade-in fade-faster'>Uređenje prostora za vaš dom ili posao</p>
            <div className='slide-in slide-bottom'><Link href={"tel:0621612007"}>Pozovite nas!</Link></div>
          </div>
        </div>
      </div>
      <div className={`${styles.hero_wave} ${styles.hw_1}`}></div>
      <div className={`${styles.hero_wave} ${styles.hw_2}`}></div>
    </div>
  )
}

export default Hero