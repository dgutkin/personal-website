import {useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../styles/About.css';

function About() {

    useEffect(() => {

        // animate the hand

    }, []);

    return(
        <Container fluid className="about-container">
            <Row>
                <Col>
                    <Row>
                        <h1>Daniel Gutkin</h1>
                        <br/> 
                        <p>I like to build things.</p>
                    </Row>
                    <Row>
                        <Image className="profile-img" src="Dan_Photo.jpg"/>
                    </Row>
                    <Row>
                        <ul className="experience-list">
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>Currently tinkering with React, Node.js, Express and Unity</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>Ex-asset management data professional</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>Ex-management consultant</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>uWaterloo mathematics alumnus</p>
                            </li>
                        </ul>
                    </Row>
                    <Row>
                        <div className="link-container">
                            <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </div>
                    </Row>
                </Col>
                <Col>
                    <FontAwesomeIcon className="hand-point" icon={faHandPointUp} />
                </Col>
            </Row>
        </Container>
    );
}

export default About;
