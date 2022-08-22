import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const ReactNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand href="/">TodoVis</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto text-decoration-none">
          <Nav.Link><Link className="text-decoration-none" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className="text-decoration-none" to="/todoist">Todoist</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default ReactNav;
