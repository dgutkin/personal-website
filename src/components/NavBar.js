import {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import {Link} from 'react-router-dom';


import '../styles/NavBar.css';

function NavBar() {

    const [key, setKey] = useState(window.location.pathname === "/" ? "about" : "projects");

    const handleSelect = (key) => {
        setKey(key);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="underline" activeKey={key}>
                        <NavItem><Nav.Link as={Link} eventKey="about" to="/" onClick={() => handleSelect("about")}>About</Nav.Link></NavItem>
                        <NavItem><Nav.Link as={Link} eventKey="projects" to="/projects" onClick={() => handleSelect("projects")}>Projects</Nav.Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
