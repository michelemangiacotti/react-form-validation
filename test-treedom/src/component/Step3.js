import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Step3 extends React.Component {
    render() {
        return (
            <Container fluid="md" style={{ width: '100%', marginTop: "30px" }}
                className={this.props.step !== 2 ? 'disabled-step' : ''}>
                <Row>
                    <Col>
                        <label style={{ alignContent: 'center', fontSize: '20px' }}>
                            Terzo Step
                            </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <input placeholder="Inserisci Email" type="text" name="email"
                            style={{ width: '50%' }}
                            value={this.props.email}
                            onChange={this.props.onChangeEmail}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label style={{ fontSize: 15, color: "red" }}>
                            {this.props.emailErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-success" onClick={() => this.props.onClickBack()}
                            style={{ width: "80px", display: this.props.isMobile ? 'none' : 'visible' }} >
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }} disabled={this.props.isValid}>
                            Invia
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step3;
