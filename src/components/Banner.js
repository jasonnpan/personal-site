import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "CS Student @ uWaterloo", "Lifelong Tinkerer" ];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>{`Hi! I'm Jason.`}</h1>
              <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "CS Student @ uWaterloo", "Lifelong Tinkerer" ]'>
                <span className="wrap">{text}</span>
              </span>
              <p>
                Welcome to my portfolio! I am a software developer experienced in full stack web development 
                and iOS app development. Currently, I'm a second year CS student at the University of Waterloo.
                I'm particularly passionate about applications of tech in the fields of productivity and health care!
              </p>
              <div className="social-icon">
                <a onClick={() => window.open("https://www.linkedin.com/in/jasonpann/")}><img src={navIcon1} alt="linkedin" /></a>
                <a onClick={() => window.open("https://github.com/jasonnpan")}><img src={navIcon2} alt="github" /></a>
                <a onClick={() => window.open("mailto:j7pan@uwaterloo.ca")}><img src={navIcon3} alt="email" /></a>
                <a onClick={() => window.open("https://www.linkedin.com/in/jasonpann/")}><img src={navIcon4} alt="resume" /></a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="header-img">
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
