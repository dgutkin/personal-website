import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
                <p>Some of my work...</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Card className="project-card">
                        <Card.Img className="card-image" src="Phone.jpeg" />
                        <Card.Body>
                            <Card.Title>Quacky Clicker</Card.Title>
                            <Card.Text>
                                Rubber ducky themed clicker game for iOS. Built in Unity.
                            </Card.Text>
                            <div className="link-container">
                            <a className="link-button" href="https://www.apple.com/ca/search/quacky-clicker?src=globalnav">
                                    <FontAwesomeIcon icon={faPlay} size="2xl"/>
                                </a>
                                <a className="link-button" href="https://github.com/dgutkin/Quacky-Clicker">
                                    <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img className="card-image" src="Mac.jpeg" />
                        <Card.Body>
                            <Card.Title>Dad Jokes</Card.Title>
                            <Card.Text>
                                Dad joke generator on the web. Built with React.js.
                            </Card.Text>
                            <div className="link-container">
                                <a className="link-button" href="https://github.com/dgutkin/dad-jokes">
                                    <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="project-card">
                        <Card.Img className="card-image" src="Code.jpeg" />
                        <Card.Body>
                            <Card.Title>Running Journal</Card.Title>
                            <Card.Text>
                                Running training digital journalling on the web. Built with Next.js, Express and MongoDB.
                            </Card.Text>
                            <div className="link-container">
                                <a className="link-button" href="https://github.com/dgutkin/running-journal">
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
