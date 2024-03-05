import styles from './amg.module.css'
import { FaHandHolding } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { GiGroundSprout } from "react-icons/gi";

const AboutMiddleGrid = () => {
  return (
    <div className={styles.about_middle_grid}>
        <div className={styles.about_middle_margin}>
            <h1 className='slide-in slide-top'>Zašto izabrati nas</h1>
            <div className={styles.about_middle_content}>
                <div className={styles.about_vectors}>
                    <div className={`${styles.about_vector} fade-in fade-faster`}>
                        <div className={styles.av_circle}>
                            <FaHandHolding />
                        </div>
                        <h3>Iskusan tim</h3>
                        <p>Naš tim stručnjaka već godinama stvara prelepe travnjake i bašte.</p>
                    </div>
                    <div className={`${styles.about_vector} fade-in fade-faster`} style={{transitionDelay: '.3s'}}>
                        <div className={styles.av_circle}>
                            <GiThreeLeaves />
                        </div>
                        <h3>Specijalisti za projektovanje</h3>
                        <p>Zajedno sa vama, kreiramo pejzažni plan koji razmatra sve vaše potrebe.</p>
                    </div>
                </div>
                <div className={`${styles.about_vectors_img} slide-in slide-bottom`}>
                    <img src="/about/aboutTransparentImg.png" alt="Dekorativna slika" />
                </div>
                <div className={styles.about_vectors}>
                <div className={`${styles.about_vector} fade-in fade-faster`}>
                        <div className={styles.av_circle}>
                            <FaTools />
                        </div>
                        <h3>Najsavremenija oprema</h3>
                        <p>Koristimo najsavremenije mašine na baterije koje zadovoljavaju sve eko norme.</p>
                    </div>
                    <div className={`${styles.about_vector} fade-in fade-faster`} style={{transitionDelay: '.3s'}}>
                        <div className={styles.av_circle}>
                            <GiGroundSprout />
                        </div>
                        <h3>Kvalitet usluge</h3>
                        <p>Brižljivo kombinujemo stručnost, personalizaciju i predanost kvalitetu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMiddleGrid