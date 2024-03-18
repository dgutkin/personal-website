import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import '../styles/App.css';
import '../styles/Professional.css';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <button
        type="button"
        style={{ background: '#f2f2f2', border: 'none', marginRight: '0.5rem' }}
        onClick={decoratedOnClick}
      >
        <FontAwesomeIcon icon={faAngleDown}/>
      </button>
    );
}

function Professional() {

    return(
        <Container fluid className="professional-container animate" id="professional">

            <Row>
                <p id="name">Professional Experience</p>
                <br/> 
                <p>Full time work</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Accordion>
                        <Card className="professional-card">
                            <Card.Body>
                                <Card.Title>Management Analytics</Card.Title>
                                <Card.Text className="card-timeframe">CPP Investments, 2020-2023</Card.Text>
                                <Card.Text>
                                    Portfolio analytics for Canada's largest asset manager.
                                </Card.Text>
                            </Card.Body>
                            <CustomToggle eventKey="0"/>
                        </Card>
                        <Accordion.Collapse eventKey="0">
                            <Card className="experience-card">
                                <ul>
                                <li className="professional-list-item"><Card.Text>Portfolio performance modelling, attribution and executive communication</Card.Text></li>
                                <li className="professional-list-item"><Card.Text>Data pipeline engineering w/ Python, Airflow and Tableau</Card.Text></li>
                                </ul>
                            </Card>
                        </Accordion.Collapse>
                    </Accordion>
                
                    <Accordion>
                        <Card className="professional-card professional-card-non-first">
                            <Card.Body>
                                <Card.Title>Strategy Consulting</Card.Title>
                                <Card.Text className="card-timeframe">Oliver Wyman Group, 2016-2020</Card.Text>
                                <Card.Text>
                                    Managment consulting in financial services and health.
                                </Card.Text>
                            </Card.Body>
                            <CustomToggle eventKey="0"/>
                        </Card>
                        <Accordion.Collapse eventKey="0">
                            <Card className="experience-card">
                                <ul>
                                <li className="professional-list-item"><Card.Text>Pandemic forecast and scenario modelling for public and client use</Card.Text></li>
                                <li className="professional-list-item"><Card.Text>Capital reserve stress test risk modelling for a large financial institution</Card.Text></li>
                                <li className="professional-list-item"><Card.Text>Business transformation strategy for a regional health system</Card.Text></li>
                                </ul>
                            </Card>
                        </Accordion.Collapse>
                    </Accordion>

                </Col>
            </Row>
        </Container>
    );
}

export default Professional;
