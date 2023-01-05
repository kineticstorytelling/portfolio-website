import React,{userState} from 'react'
import './_competencies.scss'
// import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// import { shadows } from '@mui/system';



// function Competencies() {
    // const [clicked, setClicked] = useState(false);

    // const toggle = index => {
    //     if(clicked === index){
    //         return setClicked(null)
    //     }

    //     setClicked(index)
    // }

// When I get back to this, what you're looking at is me following the tutorial on creating an accordion. I stopped here because the font awesome icon I was using only uses content, but I have to now directly connect it to each indiv line. I also need it to turn and I don't think I can do it in css anymore. I also need it to display the block in each individual one. 


export const Competencies = () => {
    return <>
    <section className='competencies' id='competencies'>
    {/* <section className="competencies" id="competencies"></section> */}
        <h2 className="section__title section__title--competencies">Competencies</h2>
        <div className="competencies__category">

        {/* Languages */}
    <div className="competencies__category-label"><h3>Languages</h3></div>
                    <Accordion className="competencies__accordion-item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3,
                            borderBottom: 'none'
            }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                            <ExpandMore />
                        }>
                            <img src={require("./assets/htmllogo.png")} alt="html" />
                            <Typography className="competencies__accordion-header competencies__accordion"><h4>HTML</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={require("./assets/sass-example.gif")} alt="CSS" />
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="competencies__accordion-item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3
            }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                            <ExpandMore />
                        }>
                            <img src={require("./assets/CSSLogo_mod1.png")} alt="CSS" />
                            <Typography className="competencies__accordion-header competencies__accordion"><h4>CSS</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={require("./assets/sass-example.gif")} alt="CSS" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="competencies__accordion-item  "sx={{ 
                            // display:'none'
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3
            }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                            <ExpandMore />
                        }>
                            <img src={require("./assets/JavaScript-logo.png")} alt="Javascript" />
                            <Typography className="competencies__accordion-header competencies__accordion"><h4>Javascript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={require("./assets/javascript-example.gif")} alt="Javascript" />
                            {/* <Typography className="competencies__accordion-item-body-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cum ipsa delectus accusamus optio? Recusandae nisi perferendis quisquam, placeat fuga pariatur assumenda aliquid culpa molestias.</Typography> */}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="competencies__accordion-item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3
            }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                            <ExpandMore />
                        }>
                            <img src={require("./assets/Typescript_logo_2020.svg.png")} alt="typescript" />
                            <Typography className="competencies__accordion-header competencies__accordion"><h4>Typescript</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={require("./assets/javascript-example.gif")} alt="typescript" />
                            {/* <Typography className="competencies__accordion-item-body-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cum ipsa delectus accusamus optio? Recusandae nisi perferendis quisquam, placeat fuga pariatur assumenda aliquid culpa molestias.</Typography> */}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                        }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Shopify-Liquid-ProgLang.png")} alt="typescript" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Liquid</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="typescript" />
                            </AccordionDetails>
                        </Accordion>
    </div>
        <br />

            <div className="competencies__category">
                <div className="competencies__category-label"><h3>Frameworks and Libraries</h3></div>
                    <Accordion className="competencies__accordion-item  "sx={{ 
                            backgroundColor: "rgba(195, 196, 197, 0.466)",
                            // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                            boxShadow: 3
                     }} >
                        <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                            <ExpandMore />
                        }>
                            <img src={require("./assets/SASS_Logo_mod1.png")} alt="SASS" />
                            <Typography className="competencies__accordion-header competencies__accordion"><h4>SASS</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <img src={require("./assets/sass-example.gif")} alt="SASS" />
                        </AccordionDetails>
                    </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/bootstrap-logo_1.png")} alt="Bootstrap" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Bootstrap</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="Bootstrap" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                        }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Tailwind_CSS_Logo.png")} alt="tailwind" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Tailwind</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="tailwind" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/React_Logo.png")} className = "competencies__accordion-header-img" alt="React" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>React</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/react-example.gif")} alt="React" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/nodejs-1-logo1.png")} alt="NodeJS" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>NodeJS</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/html-example.gif")} alt="NodeJS" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                             }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/jquery-logo.png")} alt="Jquery" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>jQuery</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="jquery" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/mongodb-logo.png")} alt="Mongodb" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>MongoDB</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="Mongodb" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Postgresql_elephant.svg.png")} alt="Jquery" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>PostgresSQL</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/javascript-example.gif")} alt="jquery" />
                            </AccordionDetails>
                        </Accordion>

        <br />

            <div className="competencies__category">
                <div className="competencies__category-label"><h3>CMS and Design</h3></div>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/WordPress_blue_logo.png")} alt="Wordpress" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Wordpress</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/elementor-example.gif")} alt="Wordpress" />
                            </AccordionDetails>
                            </Accordion>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Shopify-logo.png")} alt="Shopify" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Shopify</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/elementor-example.gif")} alt="Shopify" />
                            </AccordionDetails>
                            </Accordion>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Elementor-logo.png")} alt="Elementor" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Elementor</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/elementor-example.gif")} alt="Elementor" />
                            </AccordionDetails>
                            </Accordion>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Figma-logo.png")} alt="Figma" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Figma</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/figma-example.gif")} alt="Figma" />
                            </AccordionDetails>
                            </Accordion>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                            }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/AdobeXD-logo.png")} alt="Adobexd" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Adobe XD</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/elementor-example.gif")} alt="Adobexd" />
                            </AccordionDetails>
                            </Accordion>
                            <Accordion className="competencies__accordion-item  "sx={{ 
                                backgroundColor: "rgba(195, 196, 197, 0.466)",
                                // boxShadow: rgba(0, 0, 0, 0.411) 0px 10px 15px -3px, rgba(0, 0, 0, 0.281) 0px 4px 6px -2px,
                                boxShadow: 3
                         }} >
                            <AccordionSummary id='panel1-header' className="competencies__accordion-header" expandIcon={
                                <ExpandMore />
                            }>
                                <img src={require("./assets/Adobe_Photoshop_logo.png")} alt="AdobePhotoshop" />
                                <Typography className="competencies__accordion-header competencies__accordion"><h4>Adobe Photoshop</h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                            <img src={require("./assets/elementor-example.gif")} alt="Adobe photoshop" />
                            </AccordionDetails>
                            </Accordion>
            </div>
        </div>

    </section>
    
    </>
}

export default Competencies