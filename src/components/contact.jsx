import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const Submit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility >
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
                <div className="animate__animated animate__fadeIn">
                <h2>Get In Touch</h2>
                <form onSubmit={Submit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="7"  placeholder="Message" ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
