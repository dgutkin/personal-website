import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import scroller from 'react-scroll';

import '../styles/NavBar.css';

function NavBar() {

    const scrollToAbout = () => {
        scroller.scrollTo(0,0);
    }

    const scrollToProject = () => {
        scroller.scrollTo('projects', {
            smooth: true
        });
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="#about"></Navbar.Brand>
                    <Nav className="me-auto" variant="underline" defaultActiveKey="#about">
                        <Nav.Link href="#about" onSelect={scrollToAbout}>About</Nav.Link>
                        <Nav.Link href="#projects" onSelect={scrollToProject}>Projects</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
