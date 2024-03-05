import styles from './contact-form.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contact_form_container}>
        <h1 className='slide-in slide-top'>Dobijte vašu ponudu!</h1>
        <p className='fade-in fade-faster'>Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor. Pozovite nas na 0621612007 ili nam pošaljite poruku koristeći obrazac ispod i mi ćemo vam se javiti čim budemo mogli.</p>
        <form action="" className={styles.contact_form}>
            <div className={styles.contact_form_top}>
                <div className={`${styles.contact_input} slide-in slide-bottom`}>
                    <label htmlFor="">Ime i prezime</label>
                    <input type="text" />
                    <span>Error message</span>
                </div>
                <div className={`${styles.contact_input} slide-in slide-bottom`}>
                    <label htmlFor="">Broj telefona</label>
                    <input type="tel" />
                    <span>Error message</span>
                </div>
            </div>
            <div className={`${styles.contact_input} slide-in slide-bottom`}>
                <label htmlFor="">Email</label>
                <input type="email" />
                <span>Error message</span>
            </div>
            <div className={`${styles.contact_input} slide-in slide-bottom`}>
                <label htmlFor="">Poruka</label>
                <textarea type="text" />
                <span>Error message</span>
            </div>
            <div className='slide-in slide-bottom'><button type='submit'>Pošalji</button></div>
        </form>
    </div>
  )
}

export default ContactForm