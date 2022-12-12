import React from 'react'
import './_hero.scss'
import '../components/_svg.scss'

function Hero() {
  return (
    <>
    <section className="hero" id="home">
    <svg className="hero_svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 210">
        <path d="M0 0h160v210H0z" />
        <path d="M0 0h160v210H0z"/>
        <path d="M60.8 126c7.294-2.406 14.478-4.826 21.6-7.2" stroke="#000" stroke-width="8" stroke-linecap="round"/>
        <path d="M84.8 106.8c-.6.232-31.063 9.055-30.222 12.178C56.097 124.621 56 132.666 56 138.4c0 7.648 11.594-.827 16-2.4 5.197-1.856 11.23-3.615 16-6M103.6 66.8c-2.909 6.67-6.23 13.326-8.356 20.311-.755 2.482.381 2.09 2.49 2.09 7.595 0 12.131 2.596 16.266 8.8M89.2 58c0 19.985 1.634 39.72 3.6 59.6.629 6.36.961 12.648 1.244 19.022.063 1.396 1.724 6.346-.044 4.578M60.4 66.8c2.565 6.068 4.675 13.983 10.222 5.6 1.466-2.216 2.865-4.635 3.378-7.2" stroke="#000" stroke-width="8" stroke-linecap="round"/>
        <path d="M46 66c.007.848 3.336 40.873 5.156 40.267 5.16-1.721 10.049-5.496 14.577-8.356 5.726-3.616 12.229-7.073 17.067-11.91" stroke="#000" stroke-width="8" stroke-linecap="round"/>
    </svg>
    <span className="section__title section__title--hero">Hi, I'm</span>
    <h3 className="hero__subtitle section__subtitle--hero">and I like making websites</h3>
    <h3 className="hero__subtitle section__subtitle--hero1">Especially Web Design and Front-end Development</h3>
    {/* <a to="#contact"><button className="hero_btn">Contact</button></a>          */}
    </section> 
    </>
  )
}

export default Hero;