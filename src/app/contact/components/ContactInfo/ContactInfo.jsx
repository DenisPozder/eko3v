import Image from 'next/image'
import styles from './contact-info.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfoData = [
    {
        icon: <FaPhoneAlt />,
        title: "Pozovite nas",
        desc: "Recite nam svoje potrebe i poslaćemo vam procenu.",
        details: "0621612007"
    },
    {
        icon: <MdEmail />,
        title: "Pišite nam na mail",
        desc: "Za opšta pitanja, kontaktirajte nas putem e-pošte.",
        details: "eko3ve@gmail.com & trivicmladen@gmail.com"
    },
]

const ContactInfo = () => {
  return (
    <div className={styles.contact_info}>
        <Image src={"/contact/contactImg.jpg"} alt='Pozadina kontakt stranice' loading='lazy' fill="full" />
        <div className={styles.contact_info_overlay}>
            <div className={styles.contact_info_wrap}>
                {
                    ContactInfoData.map((contact, index) => (
                        <div key={index} className={styles.contact_info_card}>
                            <span>{contact.icon}</span>
                            <h3>{contact.title}</h3>
                            <p>{contact.desc}</p>
                            <h3>{contact.details}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ContactInfo