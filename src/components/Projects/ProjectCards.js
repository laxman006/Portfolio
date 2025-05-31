import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="project-card-view shadow-sm h-100"
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        border: isHovered ? "6px solid #8e44ad" : "2px solid #8e44ad",
        background: "#fff",
        transition: "transform 0.3s, border 0.2s, box-shadow 0.3s",
        transform: isHovered ? "scale(1.12)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 32px 0 rgba(142,68,173,0.25)"
          : "0 4px 16px 0 rgba(142,68,173,0.10)",
        zIndex: 1,
        position: "relative",
        width: "100%",
        maxWidth: "95vw"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: "hidden", height: "210px", background: "#f8f9fa" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title + " image"}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s"
          }}
          loading="lazy"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-2" style={{ fontSize: "1.2rem", color: "#8e44ad" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", minHeight: "80px", color: "#fff" }}>
          {props.description}
        </Card.Text>
        {props.techStack && (
          <div className="mb-2">
            <small className="text-muted">
              <strong>Tech:</strong> {props.techStack.join(", ")}
            </small>
          </div>
        )}
        <div className="mt-auto d-flex gap-2">
          {props.ghLink && (
            <Button
              variant="dark"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              aria-label="GitHub Repository"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="outline"
              style={{ borderColor: "#8e44ad", color: "#8e44ad" }}
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              aria-label="Live Demo"
            >
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
