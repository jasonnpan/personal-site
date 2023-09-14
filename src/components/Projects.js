import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/grapple-ballkour.png";
import projImg2 from "../assets/img/overwatch.png";
import projImg3 from "../assets/img/kapsule.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Grapple Ballkour",
      description: "2D Platformer Android Mobile Game",
      imgUrl: projImg1,
      link: "https://play.google.com/store/apps/details?id=com.EcxLStudios.GrappleBallkour&hl=en_CA&gl=US",
    },
    {
      title: "Overwatch 2 Tierlist Maker",
      description: "Tierlist Customization Web App",
      imgUrl: projImg2,
      link: "https://github.com/jasonnpan/overwatch-2-tier-list-maker",
    },
    {
      title: "Kapsule",
      description: "Fan Art & Photo Sharing Platform",
      imgUrl: projImg3,
      link: "https://github.com/jasonnpan/Kapsule",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className="animate__animated">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
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
