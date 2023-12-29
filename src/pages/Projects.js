import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../styles/Projects.css';

function Projects() {
    return(
        <Container fluid className="projects-container">
            <Row>
                <Col>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Project One</Card.Title>
                            <Card.Text>
                                Lorem ipsum.
                            </Card.Text>
                            <Button variant="primary">Link</Button>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Project Two</Card.Title>
                            <Card.Text>
                                Lorem ipsum.
                            </Card.Text>
                            <Button variant="primary">Link</Button>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img variant="left" src="" />
                        <Card.Body>
                            <Card.Title>Project Two</Card.Title>
                            <Card.Text>
                                Lorem ipsum.
                            </Card.Text>
                            <Button variant="primary">Link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Projects;
