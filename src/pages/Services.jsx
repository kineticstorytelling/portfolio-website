import React from 'react';
import './_services.scss';

function Services() {
  return (
    <section className="my-services" id="services">
    <h2 className="section__title section__title--services">What I do</h2>
    <div className="services">
        <div className="service1">
            <h3>Development</h3>
            <p>I am a Front-end Developer who is passionate about creating beautiful original websites especially in regards to cultural fusion.</p>
        </div> 
      
        <div className="service">
            <h3>Design</h3>
            <p>Web Design that is pragmatic but also aesthetically pleasing is my goal. Crafting creative solutions that improve and enhance the designscape is extremely important to me. I've worked in Story Design and Filmmaking.</p>
        </div> 
        <div className="service"></div>
        <div className="service">
            <h3>Wordpress</h3>
            <p>I believe in using whatever methods that are required to creating great economical website solutions which is why I have experience using Wordpress specifically Elementor.</p>
        </div> 
    </div> 
</section>
  )
}

export default Services