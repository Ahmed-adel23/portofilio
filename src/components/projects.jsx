import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.jpg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import { ProjectCard } from './Project-Card';
export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>my name is ahmed ,i am frontend developer .you can see all projects i had do</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                      <Tab.Content  className= "animate__animated animate__slideInUp" >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key = {index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>my name is ahmed ,i am frontend developer .you can contact me in this form</p>
                        </Tab.Pane>
                      </Tab.Content> 
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
