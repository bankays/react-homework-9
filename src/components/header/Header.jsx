import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link href="# ">Home</Nav.Link>
            <Nav.Link href="# ">Bussines</Nav.Link>
            <Nav.Link href="# ">Entertainment</Nav.Link>
            <Nav.Link href="# ">General</Nav.Link>
            <Nav.Link href="# ">Health</Nav.Link>
            <Nav.Link href="# ">Science</Nav.Link>
            <Nav.Link href="# ">Sport</Nav.Link>
            <Nav.Link href="# ">Technology</Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
