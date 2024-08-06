import Image from 'next/image'
import styles from './about-specialties.module.css'

const AboutSpecialtiesData = [
    {
        image: "/about/aboutSpecialtiesImg1.jpg",
        title: "Dizajn pejzaža"
    },
    {
        image: "/about/aboutSpecialtiesImg2.jpg",
        title: "Baštanstvo"
    },
    {
        image: "/about/aboutSpecialtiesImg3.png",
        title: "Trava & Biljke"
    },
]

const AboutSpecialties = () => {
  return (
    <div className={styles.about_specialties}>
        <h1 className='slide-in slide-top'>Naše specijalnosti</h1>
        <div className={styles.about_specialties_content}>
            {
                AboutSpecialtiesData.map((about, index) => (
                    <div className={`${styles.as_card} slide-in slide-bottom`} style={{transitionDelay: `${index * .1}s`}} key={index}>
                        <Image src={about.image} alt={about.title} loading='lazy' width={600} height={440} />
                        <div className={styles.as_overlay}>
                            <h2>{about.title}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutSpecialties