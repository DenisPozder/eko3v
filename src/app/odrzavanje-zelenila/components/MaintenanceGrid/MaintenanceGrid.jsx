import Image from 'next/image'
import styles from './maintenance-grid.module.css'
import MaintenanceGridData from '@/Data/MaintenanceData'
import Link from 'next/link'

const MaintenanceGrid = () => {
  return (
    <div className={styles.maintenance_grid_container}>
        <div className={styles.maintenance_grid_content}>
            {
                MaintenanceGridData.map((maintenance, index) => (
                    <Link href={`/odrzavanje-zelenila/${maintenance.slug}`} className={`${styles.maintenance_box} slide-in slide-bottom`} style={{transitionDelay: `${index * .1}s`}} key={index}>
                        <div className={styles.maintenance_image}>
                            <Image src={maintenance.image} alt={maintenance.title} width={600} loading='lazy' height={200} />
                        </div>
                        <div className={styles.maintenance_text}>
                            <h3>{maintenance.title}</h3>
                            <p>{maintenance.desc}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default MaintenanceGrid