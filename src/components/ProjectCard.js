import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={10} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => window.open(link)}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="view-button"></div>
        </div>
      </div>
    </Col>
  )
}
