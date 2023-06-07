import meter1 from "../assets/img/meter4.svg";
import meter2 from "../assets/img/meter5.svg";
import meter3 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";
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
        <div className="container">
        <TrackVisibility offset={1000}>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn row" : "row"}>
                <div className="col-12">
                    <div className="skill-bx wow zoomIn ">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry&apos;s standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>}
            </TrackVisibility>      
          </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
