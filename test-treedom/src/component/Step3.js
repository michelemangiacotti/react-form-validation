import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { isStepActive } from '../App';
import { StepEnum } from '../costants/StepEnum.ts';


class Step3 extends React.Component {
    render() {
        return (
            <Container fluid="md" className={isStepActive(this.props.step, StepEnum.Terzo)}>
                <Row>
                    <Col>
                        <label className="title-step">
                            Terzo Step
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input placeholder="Inserisci Email" type="text" name="email"
                            className="input-style"
                            value={this.props.email}
                            onChange={this.props.onChangeEmail}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="error-label">
                            {this.props.emailErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-success"
                            onClick={() => this.props.onClickBack()}
                        >
                            Indietro
                        </Button>
                        <Button className="btn-success"
                            onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }}>
                            Invia
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step3;
