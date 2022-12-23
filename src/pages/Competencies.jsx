import React from 'react'
import './_competencies.scss'
// import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Competencies() {
    // const [clicked, setClicked] = useState(false);

    // const toggle = index => {
    //     if(clicked === index){
    //         return setClicked(null)
    //     }

    //     setClicked(index)
    // }

// When I get back to this, what you're looking at is me following the tutorial on creating an accordion. I stopped here because the font awesome icon I was using only uses content, but I have to now directly connect it to each indiv line. I also need it to turn and I don't think I can do it in css anymore. I also need it to display the block in each individual one. 

 return (
    <>
    <section className='competencies' id='competencies'>
        {/* <h2 className='section__title section__title--competencies'>Competencies</h2>
        <div className="competencies__category">
          <div className="competencies__category-label"><h3>Languages</h3></div>
            <div className="competencies__accordion">
              
              <div className="competencies__accordion-item">
                <div className="competencies__accordion-header" > */}
                    {/* <span>{clicked === index ? <FontAwesomeIcon icon={faAngleDown} /> :<FontAwesomeIcon icon={faAngleUp} />}</span> */}
                {/* <img src={require("./assets/HTML5_logo_and_wordmark.svg")} alt="html" />
                <h4>HTML</h4>
                </div>
                      <div className="competencies__accordion-item-body">
                          <div className="competencies__accordion-item-body-content">
                              <img src={require("./assets/html-example.gif")} alt="html" />
                          </div>
                      </div>
              </div>

              <div className="competencies__accordion-item">
                <div className="competencies__accordion-header">
                <img src={require("./assets/CSSlogo.png")} alt="CSS" />
                <h4>CSS</h4>
                </div>
                      <div className="competencies__accordion-item-body">
                          <div className="competencies__accordion-item-body-content">
                              <img src={require("./assets/sass-example.gif")} alt="CSS" />
                          </div>
                      </div>
              </div>

              <div className="competencies__accordion-item">
                <div className="competencies__accordion-header">
                <img src={require("./assets/JavaScript-logo.png")} alt="Javascript" />
                <h4>Javascript</h4>
                </div>
                      <div className="competencies__accordion-item-body">
                          <div className="competencies__accordion-item-body-content">
                              <img src={require("./assets/javascript-example.gif")} alt="Javascript" />
                          </div>
                      </div>
              </div>

              <div className="competencies__accordion-item">
                <div className="competencies__accordion-header">
                <img src={require("./assets/Sass_Logo_Color.svg")} alt="SASS" />
                <h4>SASS</h4>
                </div>
                      <div className="competencies__accordion-item-body">
                          <div className="competencies__accordion-item-body-content">
                              <img src={require("./assets/sass-example.gif")} alt="SASS" />
                          </div>
                      </div>
              </div>
              <div className="competencies__accordion-item">
                <div className="competencies__accordion-header">
                <img src={require("./assets/Typescript_logo_2020.svg.png")} alt="Typescript" />
                <h4>Typescript</h4>
                </div>
                      <div className="competencies__accordion-item-body">
                          <div className="competencies__accordion-item-body-content">
                              <img src={require("./assets/javascript-example.gif")} alt="Typescript" />
                          </div>
                      </div>
              </div>
            </div>
        </div> */}

        {/* Frameworks and Libraries  */}
                    {/* <div className="competencies__category-label"><h3>Frameworks and Libraries</h3></div>
                    <div className="competencies__accordion">
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/reactlogo.png")} alt="" />
                            <h4>React</h4>
                            </div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/react-example.gif")} alt="react" />
                                </div>
                            </div>
                        </div>
    
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/nodejs-1-logo.png")} alt="" />
                              <h4>NodeJS</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="nodejs" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/bootstrap-logo.svg")} alt="" />
                            <h4>BootStrap</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="bootstrap" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/jquery-logo.png")} alt="jQuery" /><h4>jQuery</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="jquery" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/mongodb-logo.png")} alt="mongodb" /><h4>MongoDB</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="mongo" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/Postgresql_elephant.svg.png")} alt="Postgresql" /><h4>PostgreSQL</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="postgresql" />
                                </div>
                            </div>
                        </div>
                    </div>
            
                <div className="competencies__category">
                    <div className="competencies__category-label"><h3>CMS and Design</h3></div>
                    <div className="competencies__accordion">
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/elementor.svg")} alt="elementor" />
                            <h4>Elementor</h4>
                            </div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/elementor-example.gif")} alt="elementor" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/Figma-logo.svg")} alt="figma" />
                            <h4>Figma</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/figma-example.gif")} alt="figma" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/Adobe_XD_CC_icon.svg")} alt="adobexd" />
                            <h4>AdobeXD</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="adobexd" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/Adobe_Photoshop_CC_icon.svg")} alt="photoshop" /><h4>Photoshop</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="adobe photoshop" />
                                </div>
                            </div>
                        </div>
                        <div className="competencies__accordion-item">
                            <div className="competencies__accordion-header"><img src={require("./assets/procreate.svg")} alt="procreate" />
                            <h4>Procreate</h4></div>
                            <div className="competencies__accordion-item-body">
                                <div className="competencies__accordion-item-body-content">
                                    <img src={require("./assets/html-example.gif")} alt="procreate" />
                                </div>
                            </div>
                        </div>
                  </div>
                </div> */}

    </section>
    
    </>
  )
}

export default Competencies