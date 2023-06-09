import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="project-img">
        <img src={imgUrl} alt="img" />
        <div className="project-text ">
          <h4>{title}</h4>
          <p>{description}</p>
          <button>visit</button>
        </div>
      </div>
    </Col>
  )
}
