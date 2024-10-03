import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import commerce from "../../Assets/e-commerce.jpeg"
import photoflix from "../../Assets/photoflix.jpeg"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="E-Commerce Project"
              description="An e-commerce platform similar to Amazon, offering a wide range of products and services. It provides a user-friendly interface for both buyers and sellers, making it easy to list, browse, and purchase items."
              ghLink="https://github.com/laxman006"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ photoflix}
              isBlog={false}
              title="PhotoFlix"
              description="PhotoFlix is an image gallery application that allows users to search for images and add their favorites to a personalized collection. It features infinite scrolling and integrates with the Unsplash API for a seamless browsing experience."
              ghLink="https://github.com/laxman006"
              demoLink=""
            />
          </Col>

         

          

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
