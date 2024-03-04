import Image from 'next/image'
import styles from './ac.module.css'
import Link from 'next/link'

const AboutComponent = () => {
  return (
    <div className={styles.about_component}>
        <div className="margin">
            <div className={styles.about_component_content}>
                <div className={styles.about_component_column}>
                    <h1>O nama</h1>
                    <p>Eko-3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja i održavanja zelenih površina, kako bismo zadovoljili sve stambene ili poslovne potrebe, bilo da se radi o maloj parceli koju želite da ispunite cvećem ili biljkama, ili parceli od nekoliko hiljada kvadrata na kojoj želite savršen travnjak tu smo da vam pomognemo!</p>
                    <Link href={"/about"}>Pročitajte više</Link>
                </div>
                <div className={styles.about_component_column}>
                    <div className={styles.acc_image}>
                        <Image width={480} height={380} loading="lazy" src="/home/aboutComponentImg.jpg" alt="Slika za o nama sekciju" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent