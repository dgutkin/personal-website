import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import scroller from 'react-scroll';

import '../styles/NavBar.css';

function NavBar() {

    // const scrollToAbout = () => {
    //     scroller.scrollTo(0,0);
    // }

    // const scrollToProject = () => {
    //     scroller.scrollTo('projects', {
    //         smooth: true
    //     });
    // }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid className="navbar-container">
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" variant="underline">
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
