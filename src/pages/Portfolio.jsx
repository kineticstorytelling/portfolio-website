import React from 'react';
import './_portfolio.scss';


function Portfolio() {
  return (
    // My Work 
    <div className="portfolio">
    <section className="section__body--portfolio" id="work">
        <div className="designs">
            <h2 className="section__title section__title--portfolio">Past Designs</h2>
    
        <div className="portfolio project_content1">
            <div>
            <p className="portfolio project_overline">Featured Project</p>
            <h3 className="portfolio project_title">
                <a href="https://github.com/DLiSWE/Pantry/">Virtual Fridge</a>
            </h3>
            <div className="portfolio project_description1">
                <p>I developed a web application with a team that lets users store food ingredients provided by Spoonacular's API and fetches 2 recipes for each item in their 'fridge'. You can create a profile and multiple 'fridges' or 'pantries' that other users can see. So when you go shopping, you will know what other ingredients you need to make that recipe.</p>
            </div>
            <ul className="portfolio project_techList">
               <li>Figma</li>
               <li>Javascript</li>
               <li>Python</li>
               <li>Django</li>
               <li>PostgreSQL</li>
            </ul>
            </div>
        </div>

        <div className="portfolio project_image1">
            <a href="https://github.com/DLiSWE/Pantry/">
                    <img src={require("./assets/fridge1.jpg")} alt="Fridge Project" /> 
            </a>
        </div>
    </div>
        <div className="portfolio project_content2">
            <div>
            <p className="portfolio project_overline">Featured Project</p>
            <h3 className="portfolio project_title">
                <a href="https://emergenthealing.com/">Website</a>
            </h3>
            <div className="portfolio project_description2">
                <p>I built this website for an acupuncturist. I first designed the website logo and theme in Adobe Photoshop, Procreate and Figma before building the website using Elementor and Wordpress.</p>
            </div>
            <ul className="portfolio project_techList">
               <li>Figma</li>
               <li>Adobe Photoshop</li>
               <li>Procreate</li>
               <li>Elementor</li> 
            </ul>
            </div>
        </div>
        <div className="portfolio project_image2">
            <a href="https://emergenthealing.com/">
                   <img src={require("./assets/Emergent Healing Design.png")} alt="Emergent Healing Website Design" />
            </a>
        </div>
        <div className="portfolio project_content3">
            <div>
            <p className="portfolio project_overline">Featured Project</p>
            <h3 className="portfolio project_title">
                <a href="https://github.com/DLiSWE/Project3">Guessing Game</a>
            </h3>
            <div className="portfolio project_description3">
                <p>A simple guessing game app built using HTML CSS and Javascript particulary DOM Manipulation.</p>
            </div>
            <ul className="portfolio project_techList">
               <li>HTML</li>
               <li>CSS</li>
               <li>Javascript</li> 
            </ul>
            </div>
        </div>
        <div className="portfolio project_image3">
            <a href="https://github.com/DLiSWE/Project3">
                    <img src={require("./assets/Guess the number game.png")} alt="Emergent Healing Website Design" />
            </a>
        </div>
    </section>
  </div>
  )
}

export default Portfolio