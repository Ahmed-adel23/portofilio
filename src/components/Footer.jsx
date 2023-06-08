import { Container, Row, Col } from "react-bootstrap";
import logo  from '../assets/img/logo.svg'
import navIcon1 from "../assets/img/LinkedIn.svg";
import navIcon2 from "../assets/img/Facebook.svg";
import navIcon3 from "../assets/img/Instagram.svg";
import { Newsletter } from './newsLetter';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col lg={6} md={12}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col lg={6} md={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
