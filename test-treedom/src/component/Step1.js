import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Step1 extends React.Component {
    render() {
        return (
            <Container fluid="md" style={{ width: '100%' }}
                className={this.props.step !== 1 ? 'disabled-step' : ''}>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ alignContent: 'center', fontSize: '20px' }}>
                            Primo Step
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Nome:
                            <input type="text" name="nome" style={{ width: '25%' }}
                                  value={this.props.nome} onChange={this.props.onChangeNome} />
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ fontSize: 12, color: "red" }}>
                           {this.props.nomeErrore}
                        </label>
                    </Col>
                </Row>

                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Cognome:
                            <input type="text" name="cognome" style={{ width: '25%' }}
                                value={this.props.cognome} onChange={this.props.onChangeCognome}  />
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ fontSize: 12, color: "red" }}>
                           {this.props.cognomeErrore}
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <Button className="btn-disabled " onClick={() => this.props.onClickBack()}
                            style={{ width: "70px" }} disabled={true}>
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "70px" }} disabled={this.props.isValid}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step1;