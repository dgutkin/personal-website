import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../styles/Projects.css';

function Projects() {
    return(
        <Container fluid className="projects-container" id="projects">
            <Row>
                <Col>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Quacky Clicker</Card.Title>
                            <Card.Text>
                                A rubber ducky themed clicker game for iOS.
                            </Card.Text>
                            <Button variant="dark" href="https://github.com/dgutkin/Quacky-Clicker">Check it out</Button>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Bart the Banker</Card.Title>
                            <Card.Text>
                                A procedurally generated runner game for mobile.
                            </Card.Text>
                            <Button variant="dark" href="https://github.com/dgutkin/Bart-The-Banker">Check it out</Button>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Under Construction</Card.Title>
                            <Card.Text>
                                Web development project.
                            </Card.Text>
                            <Button variant="dark" disabled>Check it out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Projects;
