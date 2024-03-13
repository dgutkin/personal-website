import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../styles/App.css';
import '../styles/Professional.css';

function Professional() {
    return(
        <Container fluid className="professional-container animate" id="professional">

            <Row>
                <p id="name">Professional Experience</p>
                <br/> 
                <p>Some adventures...</p>
            </Row>

            <Row>
                <Col className="card-list">

                    <Card className="professional-card">
                        <Card.Img className="card-image" src="Work.jpg" />
                        <Card.Body>
                            <Card.Title>CPP Investments</Card.Title>
                            <Card.Text className="card-timeframe">2020-2023</Card.Text>
                            <Card.Text>
                                Portfolio analytics for Canada's largest asset manager.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Card className="professional-card">
                        <Card.Img className="card-image" src="Work.jpg" />
                        <Card.Body>
                            <Card.Title>Oliver Wyman Group</Card.Title>
                            <Card.Text className="card-timeframe">2016-2020</Card.Text>
                            <Card.Text>
                                Management consulting in financial services and health.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Professional;