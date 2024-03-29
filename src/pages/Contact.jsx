import React from 'react'
import './_contact.scss'
import '../components/_buttons.scss';

function Contact() {
  return (
    <section className="contact" id="contact">
    <h2>Reach Out</h2>
    <p>Feel free to contact for any questions</p>
    <a href="mailto:kineticstorytelling@gmail.com"><button>Contact</button></a>
</section>
  )
}

export default Contact