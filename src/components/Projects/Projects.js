import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import commerce from "../../Assets/e-commerce.jpeg"
import photoflix from "../../Assets/photoflix.jpeg"
import Slackmockapi from "../../Assets/Slackmockapi.png"
import TaskManager from "../../Assets/TaskManager.png"



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
              imgPath={TaskManager}
              isBlog={false}
              title="Task Manager"
              description="A full-stack Task Manager application built with Next.js, NestJS, and MongoDB. Users can register, log in, create, edit, and track their tasks with priorities and due dates. The backend is deployed on Render and the database is hosted on MongoDB Atlas."
              ghLink="https://github.com/laxman006/task-manager"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">          
            <ProjectCard
              imgPath={Slackmockapi}
              isBlog={false}
              title="Slack Mock API"
              description="A full-stack web application that simulates key components of a Slack-like admin dashboard using React, Node.js, and REST APIs. This project demonstrates how to build a modern interface that fetches and displays mock data — including users, license info, and system usage statistics — from a backend API powered by static JSON files."
              ghLink="https://github.com/laxman006/Slack-Mock-Api"
              demoLink=""
            />
          </Col>


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
