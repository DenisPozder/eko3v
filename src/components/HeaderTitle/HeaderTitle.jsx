import Image from 'next/image'
import styles from './header-title.module.css'

const HeaderTitle = ({image, title}) => {
  return (
    <div className={styles.header_title_container}>
        <Image className='fade-in fade' src={image} alt='Slika za header sekciju sa naslovom' width={1200} height={280} loading='lazy' />
        <div className={styles.header_title_overlay}>
            <div className={styles.header_title_wrap}>
                <h1 className='fade-in fade-faster' style={{transitionDelay: '.6s'}}>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default HeaderTitle