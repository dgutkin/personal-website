import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../styles/App.css';
import '../styles/About.css';

function About() {

    return(
        <Container fluid className="about-container animate" id="about">
            <Row>
                <Col>
                    <Row>
                        <p id="name">Daniel Gutkin</p>
                        <br/> 
                        <p>Data professional</p>
                    </Row>
                    <Row>
                        <Image className="profile-img" src="Dan_Photo.jpg"/>
                    </Row>
                    <Row>
                        <ul className="experience-list">
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faStar} /></p>
                                <p>Analytics | Data | Strategy</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faBriefcase} /></p>
                                <p>Financial Services | Professional Services</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faGraduationCap} /></p>
                                <p>U of Waterloo Mathematics</p>
                            </li>
                        </ul>
                    </Row>
                    <Row>
                        <div className="link-container">
                            <a className="link-button" href="https://github.com/dgutkin">
                                <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                            </a>
                            <a className="link-button" href="https://linkedin.com/in/dgutkin">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                            </a>
                            <a className="link-button" href="mailto:dngutkin@gmail.com">
                                <FontAwesomeIcon icon={faSquareEnvelope} size="2xl"/>
                            </a>
                        </div>
                    </Row>
                    <Row>
                        <p id="made-from-label">Made with <FontAwesomeIcon icon={faReact}/> and <FontAwesomeIcon icon={faMugSaucer} size="xs"/>.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
