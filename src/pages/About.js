import {useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
                        <h2>Daniel Gutkin</h2>
                        <br/> 
                        <p>Building things.</p>
                    </Row>
                    <Row>
                        <Image className="profile-img" src="Dan_Photo.jpg"/>
                    </Row>
                    <Row>
                        <ul className="experience-list">
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>Tinkering with React, Node.js, Express and Unity</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>Ex-financial services strategy and data professional</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon className="list-icon" icon={faCheck} /></p>
                                <p>U of Waterloo mathematics</p>
                            </li>
                        </ul>
                    </Row>
                    <Row>
                        <div className="link-container">
                            <Button variant="light" href="https://github.com/dgutkin">
                                <FontAwesomeIcon icon={faSquareGithub} size="2xl"/>
                            </Button>
                            <Button variant="light" href="https://linkedin.com/in/dgutkin">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                            </Button>
                            
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
