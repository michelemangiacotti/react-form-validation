import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Step3 extends React.Component {
    render() {
        return (
            <Container fluid title="Terzo Step" style={{ width: '100%' }}  className = { this.props.step !==3 ? 'disabledStep' : ''}>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ alignContent: 'center' }}>
                            Terzo Step
                            </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Email:
                                <input type="text" name="email" ref ={this.props.email} style={{ width: '50%' }}/>
                        </label>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <Button className="btn-success" onClick={() => this.props.onClickBack()} style={{ width: "70px" }} >
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickRegistration()} 
                        style={{ marginLeft: "15px", width: "70px" }} disabled={this.props.isValid}>
                            Invia
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step3;
