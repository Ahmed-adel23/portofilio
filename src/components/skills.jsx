import rounded1 from "../assets/img/meter4.svg";
import rounded2 from "../assets/img/meter5.svg";
import rounded3 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import { Container , Col , Row } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill " id="skills" >
        <Container>
            <Row className= "animate__animated animate__zoomIn animate__delay-.5s  ">
                <Col size={12} >
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>you can see my skills here</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={rounded1} alt="Image" />
                                <h4>Web Development</h4>
                            </div>
                            <div className="item">
                                <img src={rounded2} alt="Image" />
                                <h4>Brand Identity</h4>
                            </div>
                            <div className="item">
                                <img src={rounded3} alt="Image" />
                                <h4>Logo Design</h4>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
          </Container>
    </section>
  )
}
