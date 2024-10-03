import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Laxman Kadari </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently looking for job
            <br />
            I have completed B.Tech in Computer Science and engineering at JNTUH
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Walking 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work never fails!"{" "}
          </p>
          <footer className="blockquote-footer">Laxman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
