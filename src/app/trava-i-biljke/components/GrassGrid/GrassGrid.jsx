import Image from 'next/image'
import styles from './grass-grid.module.css'
import GrassGridData from '@/Data/GrassData'
import Link from 'next/link'

const GrassGrid = () => {
  return (
    <div className={styles.grass_grid_container}>
        <div className={styles.grass_grid_content}>
            {
                GrassGridData.map((grass, index) => (
                    <Link href={`/trava-i-biljke/${grass.slug}`} key={index} className={`${styles.grass_box} slide-in slide-bottom`} style={{ transitionDelay: `${index * .1}s`}}>
                        <div className={styles.grass_image}>
                            <Image src={grass.image} alt={grass.title} width={1000} height={200} loading='lazy' />
                        </div>
                        <div className={styles.grass_text}>
                            <h3>{grass.title}</h3>
                            <p>{grass.desc}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default GrassGrid