import React from 'react'
import './_hero.scss'
import '../components/_svg.scss'

function Hero() {
  return (
    <>
    <section className="hero" id="home">
    <span className="section__title section__title--hero">Hi, I'm</span>
    <h3 className="section__title section__title--hero-name">Luke Nam</h3>
    <h3 className="hero__subtitle section__subtitle--hero">and I like making websites</h3>
    <h3 className="hero__subtitle section__subtitle--hero1">Especially Web Design and Full-stack Development</h3>
    {/* <a to="#contact"><button className="hero_btn">Contact</button></a>          */}
    </section> 
    </>
  )
}

export default Hero;