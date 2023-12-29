import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/NavBar.css';

function NavBar() {

    const aboutClick = (event) => {
        // scroll to the About page
    }

    const projectClick = (event) => {
        // scroll to the Projects page
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="underline">
                        <Nav.Link href="#" onClick={aboutClick}>About</Nav.Link>
                        <Nav.Link href="#projects" onCLick={projectClick}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
