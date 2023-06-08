import { Container, Row, Col } from "react-bootstrap";
import logo  from '../assets/img/logo.svg'
import footerIcon1 from "../assets/img/LinkedIn.svg";
import footerIcon2 from "../assets/img/Facebook.svg";
import footerIcon3 from "../assets/img/Instagram.svg";
import { Newsletter } from './newsLetter';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <Newsletter/>
          </Col>
          <Col lg={6} md={12} sm={12} className="text-center mb-2 text-sm-start">
              <img src={logo} alt="Logo"/>
          </Col>
          <Col lg={6} md={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmed-adel-bb063b256"><img src={footerIcon1} alt="Icon" /></a>
              <a href="#"><img src={footerIcon2} alt="Icon" /></a>
              <a href="#"><img src={footerIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
