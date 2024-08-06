"use client"

import Link from 'next/link'
import styles from './about-top-grid.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const AboutSliderData = [
    {
        image: "/about/aboutSliderImg1.jpg"
    },
    {
        image: "/about/aboutSliderImg2.png"
    },
    {
        image: "/about/aboutSliderImg3.png"
    },
    {
        image: "/about/aboutSliderImg4.png"
    },
]

const AboutTopGrid = () => {

    const [ current, setCurrent ] = useState(0)
    const length = AboutSliderData.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 6000)

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    if(!Array.isArray(AboutSliderData) || AboutSliderData.length <= 0) {
        return null
    }

  return (
    <div className={styles.about_top_grid}>
        <div className={styles.about_tg_margin}>
            <div className={styles.about_tg_text}>
                <h1 className='slide-in slide-left'>Ukratko o nama</h1>
                <p className='slide-in slide-left' style={{transitionDelay: '.3s'}}>Eko-3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja i održavanja zelenih površina, kako bismo zadovoljili sve stambene ili poslovne potrebe, bilo da se radi o maloj parceli koju želite da ispunite cvećem ili biljkama, ili parceli od nekoliko hiljada kvadrata na kojoj želite savršen travnjak tu smo da vam pomognemo!</p>
                <div className='slide-in slide-left' style={{transitionDelay: '.6s'}}><Link href={"/maintenance"}>Pogledajte naše usluge</Link></div>
            </div>
            <div className={`${styles.about_tg_slider} slide-in slide-right`}>
                {
                    AboutSliderData.map((slide, index) => (
                        <div className={`${styles.slider_card}`} key={index}>
                            {
                                index === current && (
                                    <div className={styles.slider_image}>
                                        <Image src={slide.image} key={`${index + 1} slika u slajderu`} width={600} height={420} loading='lazy' />
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutTopGrid