import { useEffect , useRef } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";
import TrackVisibility from "react-on-screen";
import Typed from "typed.js";
import 'animate.css';
export const Banner = () => {
  const text = useRef(null);
  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 200,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
        });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} >
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "" : ""}>
                <span  className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Ahmed Adel `} <span ref={text} className="txt-rotate"></span></h1>
                  <p>i have a lot of experince in web development </p>
                  <button> Let’s Connect <ArrowRightCircle/> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
