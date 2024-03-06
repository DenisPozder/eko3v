import Link from 'next/link'
import styles from './os.module.css'

const OurSpecialtiesData = [
    {
        title: "Održavanje zelenih površina",
        image: "/home/ourSpecialties1.jpg",
        desc: "Redovno košenje travnjaka, orezivanje drveća i žbunja, sistematsko đubrenje i kontrola štetočina samo su neki od naših pristupa očuvanju zelene raskoši."
    },
    {
        title: "Projektovanje i Izrada",
        image: "/home/ourSpecialties2.jpg",
        desc: "Svaka zelena površina ima svoju jedinstvenu priču, a mi smo tu da je oživimo, počev od idejnog dizajna do stvaranja živopisnih pejzaža, prilazimo svakom projektu sa stručnošću i kreativnošću."
    },
    {
        title: "Trava i biljke",
        image: "/home/ourSpecialties3.jpg",
        desc: "Posvećeni smo stvaranju prelelih dvorišta koja odražavaju harmoniju i prirodnu lepotu. Prilagođavamo izbor biljaka prema lokalnim klimatskim uslovima i vašim željama, stvarajući tako živopisne i održive vrtove."
    },
]

const OurSpecialties = () => {
  return (
    <div className={styles.our_specialties}>
        <div className="margin">
            <div className={styles.os_content}>
                <h2 className='slide-in slide-top'>Naše specijalnosti</h2>
                <div className={styles.os_wrap}>
                    {
                        OurSpecialtiesData.map((specialty, index) => (
                            <div key={index} className={`${styles.os_box} slide-in slide-bottom`} style={{transitionDelay: `${index * 0.1}s`}}>
                                <div className={styles.os_image}>
                                    <img src={specialty.image} alt={specialty.title} />
                                </div>
                                <div className={styles.os_text}>
                                    <h3>{specialty.title}</h3>
                                    <p>{specialty.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='slide-in slide-bottom'>
                    <Link className='slide-in slide-bottom' href={'/grass'}>Pogledajte sve usluge</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurSpecialties