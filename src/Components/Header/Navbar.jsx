import React from "react";
import "../../App.css";
import "./Header.css";
import logo from "../../assets/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navs() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="navBar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="">
          <img
            src={logo}
            alt="شعار بسمة جمال"
            className="logo-img"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="justify-content-between">

          <Nav className="mx-auto nav-links gap-4">

            <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>

            <Nav.Link as={Link} to="/about">من أنا</Nav.Link>

 
            <Nav.Link as={Link} to="/services">الخدمات القانونية</Nav.Link>

            <Nav.Link as={Link} to="/blog">المدونة القانونية</Nav.Link>

            <Nav.Link as={Link} to="/contact">تواصل معي</Nav.Link>

          </Nav>
          <Button className="appointment-btn" onClick={()=>navigate("/contact")}>
            احجز موعد
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navs;
