import styles from './design-top-text.module.css'

const DesignTopText = () => {
  return (
    <div className={styles.design_top_text}>
        <h3 className='fade-in fade-faster'>Sa našim pejzažnim arhitektom upotpunise viziju i san o svojoj zelenoj oazi ili ćemo vam je mi kreirati!</h3>
        <p className='fade-in fade-faster' style={{transitionDelay: '.3s'}}>Pre izrade projekta vrši se izlazak i snimanje terena, dogovor sa klijentom, njegove vizije i želje, pa na osnovu toga radi se plan i ponuda za izvodjenje radova pa potom naše kolege stupaju realizaciji projekta. Ako već imate vaš plan i ideju mi ćemo ih realizovati!</p>
    </div>
  )
}

export default DesignTopText