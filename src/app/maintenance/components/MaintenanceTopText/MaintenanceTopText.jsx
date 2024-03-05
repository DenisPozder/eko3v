import styles from './mtt.module.css'

const MaintenanceTopText = () => {
  return (
    <div className={styles.maintenance_top_text}>
        <h3 className='fade-in fade-faster'>Jedna od najvažnijih stvari da bi bijke bile zdrave i cvetne, a trava zelena i gusta jeste pravilno održavanje i negovanje.</h3>
        <p className='fade-in fade-faster' style={{transitionDelay: '.3s'}}>Eko-3V posebnu pažnju stavlja na ovu stavku. Naš iskusan tim se trudi da najsavremenijim agrotehničkim i hemijskim merama prihrane i zaštite obezbedi sve neophodno za normalan rast i razvoj biljaka. Koristimo najsavremenije mašine na baterije koje zadovoljavaju sve ekološke norme u vezi smanjenja buke i izduvnih gasova. Pozovite nas i daćemo vam odličnu ponodu za održavanje vaših zelenih površina na mesečnom, sezonskom ili godišnjem nivou.</p>
    </div>
  )
}

export default MaintenanceTopText