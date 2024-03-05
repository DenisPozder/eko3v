import Image from 'next/image'
import styles from './garden-banner.module.css'
import Link from 'next/link'

const GardenBanner = ({image}) => {
  return (
    <div className={styles.garden_banner_component}>
        <Image src={image} fill="full" loading='lazy' alt='Slika banera za baštu' />
        <div className={styles.garden_banner_overlay}>
            <div className={styles.garden_banner_content}>
                <h1 className='slide-top slide-in'>Želite da se pobrinemo za vašu baštu?</h1>
                <p className='fade-in fade-faster'>Pozovite nas na <Link href={"tel:0621612007"}>0621612007</Link> ili nam pišite za vašu ponudu!</p>
                <div className='slide-bottom slide-in'><Link className={styles.gbc_btn} href={"/contact"}>Kontaktirajte nas</Link></div>
            </div>
        </div>
    </div>
  )
}

export default GardenBanner