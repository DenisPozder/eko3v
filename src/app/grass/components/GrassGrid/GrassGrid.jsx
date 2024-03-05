import Image from 'next/image'
import styles from './grass-grid.module.css'

const GrassGridData = [
    {
        title: "Sejanje travnjaka",
        image: "/grass/grassGridImg1.jpeg",
        desc: "Sejanje travnjaka je ključni korak ka stvaranju zelene oaze. Pažljivo birana semena, pravilno pripremljena zemlja i pravilna nega doprinose formiranju gustog i bujnog travnjaka, pružajući prostoru estetski doživljaj i funkcionalnost."
    },
    {
        title: "Sadnja biljaka i ukrasnog drveća",
        image: "/grass/grassGridImg2.jpg",
        desc: "Sadnja biljaka i ukrasnog drveća transformiše prostor u živopisnu oazu. Pažljivo odabrane vrste, pravilna sadnja i redovno održavanje obezbeđuju dugotrajnu lepotu i prirodnu harmoniju u okolini."
    },
    {
        title: "Sadnja žive ograde",
        image: "/grass/grassGridImg3.jpg",
        desc: "Sadnja žive ograde pruža ne samo estetsku vrednost već i funkcionalnu korist. Brzo rastuće i gusto zelene biljke formiraju prirodnu barijeru, pružajući privatnost, zaštitu od vetra i doprinoseći ukupnom pejzažnom doživljaju."
    },
    {
        title: "Humus i zemlja",
        image: "/grass/grassGridImg4.jpg",
        desc: "Humus, dragocen spoj organske materije, pruža podršku zdravom rastu biljaka. Naša pažljivo odabrana zemlja, obogaćena humusom, stvara idealno okruženje za biljke. "
    },
    {
        title: "Postavljanje tepih travnjaka",
        image: "/grass/grassGridImg5.png",
        desc: "Postavljanje tepih travnjaka - brzo, efikasno, dugotrajno. Osvježite prostor uz naše stručnjake."
    },
    {
        title: "Malč i ukrasno kamenje",
        image: "/grass/grassGridImg6.jpeg",
        desc: "Malč i ukrasno kamenje - dodir prirode u vašem vrtu. Održavajte estetiku i plodnost uz naš izbor malčeva i kamenčića."
    },
]

const GrassGrid = () => {
  return (
    <div className={styles.grass_grid_container}>
        <div className={styles.grass_grid_content}>
            {
                GrassGridData.map((grass, index) => (
                    <div key={index} className={`${styles.grass_box} slide-in slide-bottom`} style={{ transitionDelay: `${index * .3}s`}}>
                        <div className={styles.grass_image}>
                            <Image src={grass.image} alt={grass.title} width={1000} height={200} loading='lazy' />
                        </div>
                        <div className={styles.grass_text}>
                            <h3>{grass.title}</h3>
                            <p>{grass.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GrassGrid