import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from "../../assets/index"
import Button from 'react-bootstrap/Button';

export const Navigation = () => {

  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const MENU = [
    { path: '/', name: 'Home' },
    { path: '/teachers', name: 'Teachers' },
    /*{path:'/clases',name: 'Clases'},*/
    { path: '/testimonios', name: 'Testimonios' },
    { path: '/faqs', name: 'FAQs' },
  ];

  const handleOnMouseOver = (name) => {
    setActiveLink(name);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              height="auto"
              className="d-inline-block align-left"
              alt="this is the logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pt-1">
            {
              MENU.map((item) => (
                <NavDropdown.Item key={item.name}>
                  <Link
                    to={item.path}
                    onMouseOver={() => handleOnMouseOver(item.name)}
                    className={`nav-link ${activeLink === item.name || location.pathname === item.path
                        ? "active-link"
                        : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                  <hr />
                </NavDropdown.Item>
              ))
            }
            <NavDropdown.Item key={'login'}>
              <Link to='/login' >
                <Button variant='info'>Contáctanos</Button>
              </Link>
              <hr />
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
