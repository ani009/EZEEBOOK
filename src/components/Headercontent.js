import React from 'react';
import { Link } from 'react-router-dom';
import Title from './title';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderContent = () => {
  return (
    <Navbar expand="lg" className="back-body">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <Title />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link className='nav-links' as={Link} to="/" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link className='nav-links' href="#link" style={{color:"white"}}> About</Nav.Link>
            <Nav.Link className='nav-links' href="#link" style={{color:"white"}}>Contact</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="/cart" style={{color:"white"}}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderContent;
