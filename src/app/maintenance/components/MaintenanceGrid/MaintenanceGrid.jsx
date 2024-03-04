import Image from 'next/image'
import styles from './maintenance-grid.module.css'

const MaintenanceGridData = [
    {
        image: "/maintenance/maintenanceGridImg1.jpeg",
        title: "Prihrana biljaka",
        desc: "Prihrana biljaka je ključna za vitalnost i bujnost vašeg biljnog sveta, pružajući im neophodne hranljive materije za zdrav rast i cvetanje."
    },
    {
        image: "/maintenance/maintenanceGridImg2.jpg",
        title: "Košenje travnjaka",
        desc: "Košenje travnjaka održava vašu okolinu uređenom i prijatnom, stvarajući prostor za opuštanje."
    },
    {
        image: "/maintenance/maintenanceGridImg3.jpg",
        title: "Orezivanje drveća i grmlja",
        desc: "Orezivanje drveća i grmlja održava biljke zdravim i podstiče pravilan rast, doprinoseći estetici i dugotrajnosti vašeg vrta."
    },
    {
        image: "/maintenance/maintenanceGridImg4.jpg",
        title: "Čišćenje staza i prilaza",
        desc: "Čišćenje staza i prilaza je ključno za održavanje pristojnog i sigurnog prostora. Naša usluga obezbeđuje čišćenje od nečistoća, snega ili lišća, čineći vaše staze prohodnim i estetski prijatnim."
    },
    {
        image: "/maintenance/maintenanceGridImg5.jpg",
        title: "Zaštita biljaka",
        desc: "Zaštita biljaka je suštinska briga za očuvanje njihovog zdravlja i prosperiteta. Naša usluga obuhvata preventivne mere i tretmane koji štite biljke od štetočina, bolesti i nepovoljnih vremenskih uslova, osiguravajući da vaš vrt ili zelena površina ostane vitalna i bujna."
    },
    {
        image: "/maintenance/maintenanceGridImg6.jpeg",
        title: "Dosejavanje i prihrana travnjaka",
        desc: "Dosejavanje i prihrana travnjaka su ključni koraci ka očuvanju zelene lepote vaše travnate površine. Naša usluga obuhvata precizno doziranje semena kako bismo ojačali travnjak i omogućili mu ravnomernu i bujnu pokrivenost."
    },
]

const MaintenanceGrid = () => {
  return (
    <div className={styles.maintenance_grid_container}>
        <div className={styles.maintenance_grid_content}>
            {
                MaintenanceGridData.map((maintenance, index) => (
                    <div className={styles.maintenance_box} key={index}>
                        <div className={styles.maintenance_image}>
                            <Image src={maintenance.image} alt={maintenance.title} width={600} loading='lazy' height={200} />
                        </div>
                        <div className={styles.maintenance_text}>
                            <h3>{maintenance.title}</h3>
                            <p>{maintenance.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MaintenanceGrid