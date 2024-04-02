import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

import '../styles/App.css';
import '../styles/Projects.css';

function Projects() {
    return(
        <Container fluid className="projects-container animate" id="projects">

            <Row>
                <p id="name">Projects</p>
                <br/> 
                <p>Side pursuits.</p>
            </Row>

            <Row>
                <p className="sub-name">Data</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Card className="project-card">
                        
                        <Card.Body>
                            <Row>
                            <Col>
                                <Card.Title>DineSafeTO Infractions</Card.Title>
                                <Card.Text>
                                    Restaurant clustering and inspection infraction rates.
                                </Card.Text>
                                <div className="link-container">
                                    <a className="link-button" href="https://nbviewer.org/github/dgutkin/dinesafe-infraction-rates/blob/main/dinesafe-infractions.ipynb">
                                        <FontAwesomeIcon icon={faPlay} size="2xl"/>
                                    </a>
                                    <a className="link-button" href="https://github.com/dgutkin/dinesafe-infraction-rates">
                                        <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={3} className="project-logo">
                                <FontAwesomeIcon icon={faUtensils} style={{color: "#c2c2c2"}}/>
                            </Col>
                            </Row>
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
                            <Row>
                            <Col>
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
                            </Col>
                            <Col xs={3} className="project-logo">
                                <FontAwesomeIcon icon={faBook} style={{color: "#c2c2c2"}}/>
                            </Col>
                            </Row>
                        </Card.Body>
                        
                    </Card>
                

                    <Card className="project-card project-card-non-first">
                        
                        <Card.Body>
                            <Row>
                            <Col>
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
                            </Col>
                            <Col xs={3} className="project-logo">
                                <FontAwesomeIcon icon={faGamepad} style={{color: "#c2c2c2"}}/>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
