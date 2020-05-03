import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { isStepActive } from '../App';
import { StepEnum } from '../costants/StepEnum.ts';



class Step1 extends React.Component {
    render() {
        return (
            <Container fluid="md" className={isStepActive(this.props.step, StepEnum.Secondo)}>
                <Row>
                    <Col>
                        <label className="title-step">
                            Secondo Step
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input placeholder="Inserisci Password" type="password" name="password"
                            className="input-style"
                            value={this.props.password}
                            onChange={this.props.onChangePassword} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input placeholder="Ripeti Password" type="password" name="confermaPassord"
                            className="input-style"
                            value={this.props.confermaPassword}
                            onChange={this.props.onChangeConfermaPassword} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="error-label">
                            {this.props.passwordErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-success"
                            onClick={() => this.props.onClickBack()}
                            style={{ width: "80px" }}>
                            Indietro
                        </Button>
                        <Button className="btn-success"
                            onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }} disabled={false}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step1;
