import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

// programming languages
import icon1 from "../assets/img/skill-icons/html.png"
import icon2 from "../assets/img/skill-icons/css.png"
import icon3 from "../assets/img/skill-icons/js.png"
import icon4 from "../assets/img/skill-icons/c.png"
import icon5 from "../assets/img/skill-icons/python.png"

// frameworks / libraries
import icon6 from "../assets/img/skill-icons/react.png"
import icon7 from "../assets/img/skill-icons/node-js.png"
import icon8 from "../assets/img/skill-icons/mongodb.png"
import icon9 from "../assets/img/skill-icons/tailwind.png"
import icon10 from "../assets/img/skill-icons/chakra-ui.png"
import icon11 from "../assets/img/skill-icons/stripe.png"
import icon12 from "../assets/img/skill-icons/redux.png"

// dev tools
import icon13 from "../assets/img/skill-icons/expo.png"
import icon14 from "../assets/img/skill-icons/unity.png"
import icon15 from "../assets/img/skill-icons/figma.png"


export const About = () => {

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>As a computer science student, I'm passionate about all things tech! From designing 
                           interactive user interfaces on Figma to building iOS applications using React Native, 
                           I'm always eager to add more skills to my tech toolbox.</p>

                        <h3>Programming Languages</h3>
                        <div class="skills-container">
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon1} alt="html" /> </div> <h2>HTML</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon2} alt="css" /> </div> <h2>CSS</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon3} alt="javascript" /> </div> <h2>JavaScript</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon4} alt="c" /> </div> <h2>C</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon5} alt="python" /> </div> <h2>Python</h2> </div>
                        </div>

                        <h3>Frameworks + Libraries</h3>
                        <div class="skills-container">
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon6} alt="react" /> </div> <h2>React</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon7} alt="node" /> </div> <h2>Node.js</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon8} alt="mongodb" /> </div> <h2>MongoDB</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon9} alt="tailwind" /> </div> <h2>Tailwind</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon10} alt="chakra-ui" /> </div> <h2>Chakra UI</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon11} alt="stripe" /> </div> <h2>Stripe.js</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon12} alt="redux" /> </div> <h2>Redux</h2> </div>
                        </div>

                        <h3>Dev Tools</h3>
                        <div class="skills-container">
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon13} alt="expo" /> </div> <h2>Expo</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon14} alt="unity" /> </div> <h2>Unity</h2> </div>
                          <div class="skill-card"> <div class="skill-bg"> <img src={icon15} alt="figma" /> </div> <h2>Figma</h2> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
