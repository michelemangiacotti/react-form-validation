import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Step2 extends React.Component {
    render() {
        return (
            <Container fluid="md" style={{ width: '100%', marginTop: "30px" }}
                className={this.props.step !== 1 ? 'disabled-step' : ''}>
                <Row>
                    <Col>
                        <label style={{ alignContent: 'center', fontSize: '20px' }}>
                            Secondo Step
                            </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <input placeholder="Inserisci Password" type="password" name="password"
                            style={{ width: '50%' }}
                            value={this.props.password}
                            onChange={this.props.onChangePassword} />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <input placeholder="Ripeti Password" type="password" name="confermaPassord"
                            style={{ width: '50%' }}
                            value={this.props.confermaPassword}
                            onChange={this.props.onChangeConfermaPassword} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label style={{ fontSize: 12, color: "red" }}>
                            {this.props.passwordErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-success" onClick={() => this.props.onClickBack()}
                            style={{ width: "80px" }}>
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }} disabled={false}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step2;
