import React, { useEffect, useRef, useState } from "react";
import { Container, Image, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";
import { HiSearch } from "react-icons/hi"
import { AiOutlinePoweroff } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { MdOutlineLanguage, MdOutlineCancel } from "react-icons/md"
import { IoSearch } from "react-icons/io5"
import './header.css'

import {
  logo
} from "../constant/imagePath";

const pages = [
  "Home ",
  "About ",
  "Subscription ",
  "Event Planners ",
  "Contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


function LookFor({ setOpen }) {
  return (
    <section className="look-for-section">
      <Container>
        <Row >
          <Col lg={12} >
            {/* <Row> */}
            {/* <Col lg={2}></Col>
              <Col lg={8}></Col>
              <Col lg={2}></Col> */}
            <div className="input-box" >
              <IoSearch className="search-icon" />
              <input placeholder="Buscar" />
              <MdOutlineCancel className="cancel-icon" onClick={() => setOpen(false)} />
            </div>
            {/* </Row> */}

          </Col>
        </Row>
      </Container>
    </section>

  )
}

function Header() {

  const [open, setOpen] = useState(false)

  return (
    <Navbar bg="dark" expand="xl" className="header">
      <Container >
        <Navbar.Brand href="" className="header-logo">
          <img alt="" src={logo} className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav header">
          <Nav>
            <Nav.Link href="" className="header-link"><HiSearch size={16.73} /> <span onClick={() => setOpen(true)}>¿Qué necesitas?</span>
            </Nav.Link>
            <Nav.Link href="" className="header-link">Productos</Nav.Link>
            <Nav.Link href="" className="header-link">Empresa</Nav.Link>
            <Nav.Link href="" className="header-link">Seguridad</Nav.Link>
            <Nav.Link href="" className="header-link">Ayuda</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="" className="header-right-link"><MdOutlineLanguage size={14.79} /><span>ES-ES</span></Nav.Link>
            <Nav.Link href="">
              <button className="header-login-btn">
                <FaUserCircle size={14.62} /> <span className="ps-1">Iniciar Sesión</span></button>
            </Nav.Link>
            <Nav.Link href="">
              <button className="header-checkin-btn header-btn d-flex align-items-center justify-content-center"><AiOutlinePoweroff size={14.62} /> <span className="ps-1">Registrarse</span></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {
        open &&
        <LookFor setOpen={setOpen} />
      }

    </Navbar>
  )
}

export default Header;
