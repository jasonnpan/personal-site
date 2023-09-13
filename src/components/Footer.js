import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a onClick={() => window.open("https://www.linkedin.com/in/jasonpann/")}><img src={navIcon1} alt="linkedin" /></a>
              <a onClick={() => window.open("https://github.com/jasonnpan")}><img src={navIcon2} alt="github" /></a>
              <a onClick={() => window.open("mailto:j7pan@uwaterloo.ca")}><img src={navIcon3} alt="email" /></a>
              <a onClick={() => window.open("https://www.linkedin.com/in/jasonpann/")}><img src={navIcon4} alt="resume" /></a>
            </div>
            <p>Made with 🍜 +🧋.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
