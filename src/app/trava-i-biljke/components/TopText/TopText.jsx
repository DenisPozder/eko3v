import styles from './top-text.module.css'

const TopText = () => {
  return (
    <div className={styles.top_grass_text}>
        <h3 className='fade-in fade-faster'>U mnoštvu ponuda raznih biljaka i vrsta trava pomoćićemo vam da izaberete sta je najpogodnije za vaš prostor.</h3>
        <p className='fade-in fade-faster' style={{ transitionDelay: ".3s" }}>Važni faktori koji utiču na odabir vrsta biljaka i trava jeste osunčanost i pozicija prostora, kvalitet zemljišta, veličina parcele… Mogućnosti su nebrojane, granica je samo vaša i naša mašta. U jednom danu neugledan prostor možemo pretvoriti u vrt procvetalog cveća i gustog zelenog travnjaka.</p>
    </div>
  )
}

export default TopText