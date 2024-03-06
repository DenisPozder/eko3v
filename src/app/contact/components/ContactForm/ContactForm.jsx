"use client"

import { useState } from 'react'
import styles from './contact-form.module.css'

const ContactForm = () => {

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleContactSubmit = (e) => {
        e.preventDefault()

        let formErrors = {}

        if(username.length === 0) {
            formErrors.username = "Molimo vas da unesete vaše ime i prezime"
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            formErrors.phoneNumber = "Broj telefona nije ispravan"
        }

        if(!/^\S+@\S+\.\S+$/.test(email)) {
            formErrors.email = "Email adresa nije ispravna"
        }

        if(message.length > 400) {
            formErrors.message = "Vaša poruka mora biti manja od 400 karaktera"
        } else if (message.length === 0) {
            formErrors.message = "Molimo vas da popunite ovo polje"
        }

        setErrors(formErrors)
    }

  return (
    <div className={styles.contact_form_container}>
        <h1 className='slide-in slide-top'>Dobijte vašu ponudu!</h1>
        <p className='fade-in fade-faster'>Želite travnjak ili baštu svojih snova. Lakše je nego što mislite! Kontaktirajte nas danas i mi ćemo ulepšati vaš dom ili poslovni prostor. Pozovite nas na 0621612007 ili nam pošaljite poruku koristeći obrazac ispod i mi ćemo vam se javiti čim budemo mogli.</p>
        <form onSubmit={handleContactSubmit} className={styles.contact_form}>
            <div className={styles.contact_form_top}>
                <div className={`${styles.contact_input} slide-in slide-bottom`}>
                    <label htmlFor="">Ime i prezime</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <span>{errors.username}</span>
                </div>
                <div className={`${styles.contact_input} slide-in slide-bottom`}>
                    <label htmlFor="">Broj telefona</label>
                    <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    <span>{errors.phoneNumber}</span>
                </div>
            </div>
            <div className={`${styles.contact_input} slide-in slide-bottom`}>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <span>{errors.email}</span>
            </div>
            <div className={`${styles.contact_input} slide-in slide-bottom`}>
                <label htmlFor="">Poruka</label>
                <textarea type="text" value={message} onChange={e => setMessage(e.target.value)} />
                <span>{errors.message}</span>
            </div>
            <div className='slide-in slide-bottom'><button type='submit'>Pošalji</button></div>
        </form>
    </div>
  )
}

export default ContactForm