import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import '../styles/App.css';
import '../styles/Projects.css';

function Projects() {
    return(
        <Container fluid className="projects-container animate" id="projects">

            <Row>
                <p id="name">Projects</p>
                <br/> 
                <p>Side pursuits</p>
            </Row>

            <Row>
                <p className="sub-name">Data</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Card className="project-card">
                        
                        <Card.Body>
                            <Card.Title>DineSafeTO Infraction Rates</Card.Title>
                            <Card.Text>
                                Restaurant health infraction clustering and rates.
                            </Card.Text>
                            <div className="link-container">
                                <a className="link-button" href="https://nbviewer.org/github/dgutkin/dinesafe-infraction-rates/blob/main/dinesafe-to.ipynb">
                                    <FontAwesomeIcon icon={faPlay} size="2xl"/>
                                </a>
                                <a className="link-button" href="https://github.com/dgutkin/dinesafe-infraction-rates/blob/main/dinesafe-to.ipynb">
                                    <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            <Row>
                <p className="sub-name">Product</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Card className="project-card">
                        
                        <Card.Body>
                            <Card.Title>runPen</Card.Title>
                            <Card.Text>
                                Digital running journal for the web.
                            </Card.Text>
                            <div className="link-container">
                                <a className="link-button" href="https://runpen.ca">
                                    <FontAwesomeIcon icon={faPlay} size="2xl"/>
                                </a>
                                <a className="link-button" href="https://github.com/dgutkin/runpen-client">
                                    <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                

                    <Card className="project-card project-card-non-first">
                        
                        <Card.Body>
                            <Card.Title>Quacky Clicker</Card.Title>
                            <Card.Text>
                                Rubber duck clicker game for iOS. 100+ players.
                            </Card.Text>
                            <div className="link-container">
                                <a className="link-button" href="https://apps.apple.com/us/app/quacky-clicker/id1512702178">
                                    <FontAwesomeIcon icon={faPlay} size="2xl"/>
                                </a>
                                <a className="link-button" href="https://github.com/dgutkin/Quacky-Clicker">
                                    <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
