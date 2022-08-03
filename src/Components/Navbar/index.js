import React from 'react';
import './navbar.css';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logoNav from '../../Assets/img/navLogo.png'

export const NavbarApp = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="p-1">
    <Navbar.Brand href="/" className="d-flex m-auto">
        <img
            src={logoNav}
            width="80"
            height="80"
            className="navLogo ms-3 mx-3"
            alt="starwars"
        /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/characters">Characters</ Link>
            <Link className='nav-link' to="/planets">Planets</ Link>
            {/* <Nav.Link href="#pers">Personajes</Nav.Link>
            <Nav.Link href="#planet">Planetas</Nav.Link> */}
        </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}
