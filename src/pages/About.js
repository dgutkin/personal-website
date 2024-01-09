import {useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../styles/About.css';

function About() {

    useEffect(() => {

        // animate the contents of the page

    }, []);

    return(
        <Container fluid className="about-container animate" id="about">
            <Row>
                <Col>
                    <Row>
                        <p id="name">Daniel Gutkin</p>
                        <br/> 
                        <p>Building things.</p>
                    </Row>
                    <Row>
                        <Image className="profile-img" src="Dan_Photo.jpg"/>
                    </Row>
                    <Row>
                        <ul className="experience-list">
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faGlobe} /></p>
                                <p>Tinkering with React.js and Express for Web</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faMobile} /></p>
                                <p>Playing with C# and Unity for Mobile</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faBriefcase} /></p>
                                <p>Financial Services | Data | Strategy</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faGraduationCap} /></p>
                                <p>U of Waterloo Mathematics</p>
                            </li>
                        </ul>
                    </Row>
                    <Row>
                        <div className="link-container">
                            <a class="link-button" href="https://github.com/dgutkin">
                                <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                            </a>
                            <a class="link-button" href="https://linkedin.com/in/dgutkin">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </a>
                        </div>
                    </Row>
                    <Row>
                        <p id="made-from-label">Made with Love and React.js / CSS 3</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
