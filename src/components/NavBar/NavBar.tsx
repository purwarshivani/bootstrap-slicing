import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import imgae from "../../assets/images/brand.png";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={imgae} alt="..." height="36" />
          </a>
          <Navbar.Brand href="#home">React</Navbar.Brand>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end font-semi-small"
          >
            <Nav>
              <Nav.Link href="#home" className="text-black">
                Home
              </Nav.Link>
              <NavDropdown
                title={<span className="text-dark my-auto">About us</span>}
                id="collasible-nav-dropdown"
                className="text-black"
              >
                <NavDropdown.Item href="#action/3.1" className="text-black">
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="text-black">
                  Location
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="text-black">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="text-black">
                Services
              </Nav.Link>
              <Nav.Link href="#home" className="text-black">
                News & Careers
              </Nav.Link>
              <NavDropdown
                color="dark"
                title={<span className="text-dark my-auto">Our Projects</span>}
                id="collasible-nav-dropdown "
              >
                <NavDropdown.Item href="#action/3.1">NAMS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Smart MIS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  HR utility
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="text-black">
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
