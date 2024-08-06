import Image from 'next/image'
import styles from './design-grid.module.css'

const DesignGridData = [
    {
        image: "/design/designGridImg1.png"
    },
    {
        image: "/design/designGridImg2.jpg"
    },
    {
        image: "/design/designGridImg3.jpg"
    },
    {
        image: "/design/designGridImg4.jpg"
    },
    {
        image: "/design/designGridImg5.jpg"
    },
    {
        image: "/design/designGridImg6.jpg"
    },
]

const DesignGrid = () => {
  return (
    <div className={styles.design_grid}>
        {
            DesignGridData.map((design, index) => (
                <div className={`${styles.design_image} slide-in slide-bottom`} style={{transitionDelay: `${index * .1}s`}} key={index}>
                    <Image src={design.image} alt={`Slika ${index + 1}`} width={800} height={400} loading='lazy' />
                </div>
            ))
        }
    </div>
  )
}

export default DesignGrid