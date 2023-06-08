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
      strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 200,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
        });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="banner" id="home">
      <Container>
        <Row >
          <Col xs={12} md={6} xl={7} >
              <div className= "animate__animated animate__fadeInLeft">
                <span  className="tagline animate__animated animate__fadeInDownBig">Welcome to my Portfolio</span>
                <h1>Hi! I&apos;m Ahmed Adel  <span ref={text} className="text-rotate"></span></h1>
                  <p className="animate__animated animate__fadeInUpBig">i have a lot of experince in web development </p>
                  <button className="animate__animated animate__fadeInUpBig"> Let’s Connect <ArrowRightCircle/> </button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
