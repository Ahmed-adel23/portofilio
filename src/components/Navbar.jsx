import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router } from "react-router-dom";
import 'animate.css';
import logo  from '../assets/img/logo.svg'
import icon1  from '../assets/img/LinkedIn.svg'
import icon2  from '../assets/img/Facebook.svg'
import icon3  from '../assets/img/Instagram.svg'
import { List } from "react-bootstrap-icons";
export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <Router>
      <Navbar expand="md" fixed="top" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <h1><List className="nav-toggleer"/></h1>
              
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link activeClass="active" to="home"   spy={true} offset={-80} duration={200} className='navbar-link'>Home</Link>
              <Link activeClass="active" to="skills" spy={true} offset={-80}  duration={200} className='navbar-link'>Skills</Link>
              <Link activeClass="active" to="project" spy={true} duration={200} className='navbar-link'>Projects</Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahmed-adel-bb063b256"><img src={icon1} alt="linkenin" /></a>
                <a href="#"><img src= {icon2} alt="facebook" /></a>
                <a href="#"><img src={icon3} alt="instagram" /></a>
              </div>
              <HashLink to='#connect'>
                <button ><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>  
  )
}
