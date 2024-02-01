import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import microfinace from "../../Assets/Projects/micro-finance-cover.jpg";
import gld from "../../Assets/Projects/gld-cover.png";
import lankaTimes from "../../Assets/Projects/lanka-time.jpg";
import nexa from "../../Assets/Projects/nexa-erp.jpg";


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
              imgPath={gld}
              isBlog={false}
              title="Gas Leakage Detetor And Alerting System"
              description="Innovating a state-of-the-art gas leakage detector and instant alert system, this project ensures swift notifications to individuals. The system boasts a user-friendly mobile app and an advanced IoT infrastructure, providing a seamless experience for timely responses and emergency coordination. "
              subtitle="Tech:C ,Flutter,IoT,Firebase"
              ghLink="https://github.com/TKukeenthan/Gas-Leakage-detector"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microfinace}
              isBlog={false}
              title="Micro Finance"
              description="Our Microfinance App is a robust and user-friendly platform designed to revolutionize the way microfinance institutions manage their operations and empower individuals with financial inclusion. With a focus on seamless role management and efficient loan management, this app is tailored to meet the diverse needs of microfinance organizations, ensuring a smoother and more accessible financial ecosystem. (On Going)"
             subtitle="Tech:MangoDb,Express.js,ReactJs,NodeJs (MERN Stack)"
            
              
            //  demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexa}
              isBlog={false}
              title="NEXA ERP"
              description="Revolutionize your business operations with the cutting-edge Nexa ERP mobile app, meticulously crafted for seamless efficiency and unparalleled productivity. Experience streamlined workflows and real-time insights at your fingertips, setting a new standard for business management. Available now on the Google Play Store for enhanced accessibility"
             subtitle="Tech: Flutter, Laravel"
             
              demoLink="https://play.google.com/store/apps/details?id=lk.bohar.NEXA_ERP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lankaTimes}
              isBlog={false}
              title="Lanka Times"
              description="Innovatively conceived and launched the Lanka Time News mobile application, a cutting-edge platform now available on the Google Play Store (Link). Spearheaded the creation of a user-centric interface, ensuring seamless news consumption and real-time updates. Demonstrated expertise in mobile app development and strategic deployment for enhanced accessibility and engagement."
            
              demoLink="https://play.google.com/store/apps/details?id=lk.bohar.LankaTimes"              
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
