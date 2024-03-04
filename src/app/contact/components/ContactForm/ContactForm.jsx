import styles from './contact-form.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contact_form_container}>
        <h1>Dobijte vašu ponudu!</h1>
        <p>Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor. Pozovite nas na 0621612007 ili nam pošaljite poruku koristeći obrazac ispod i mi ćemo vam se javiti čim budemo mogli.</p>
        <form action="" className={styles.contact_form}>
            <div className={styles.contact_form_top}>
                <div className={styles.contact_input}>
                    <label htmlFor="">Ime i prezime</label>
                    <input type="text" />
                    <span>Error message</span>
                </div>
                <div className={styles.contact_input}>
                    <label htmlFor="">Broj telefona</label>
                    <input type="tel" />
                    <span>Error message</span>
                </div>
            </div>
            <div className={styles.contact_input}>
                <label htmlFor="">Email</label>
                <input type="email" />
                <span>Error message</span>
            </div>
            <div className={styles.contact_input}>
                <label htmlFor="">Poruka</label>
                <textarea type="text" />
                <span>Error message</span>
            </div>
            <button type='submit'>Pošalji</button>
        </form>
    </div>
  )
}

export default ContactForm