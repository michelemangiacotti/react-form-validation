import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Step1 extends React.Component {
    render() {
        return (
            <Container fluid="md" style={{ width: '100%', marginTop: "30px" }}
                className={this.props.step !== 0 ? 'disabled-step' : ''}>
                <Row >
                    <Col>
                        <label style={{ alignContent: 'center', fontSize: '20px' }}>
                            Primo Step
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <input placeholder="Inserisci Nome" type="text" name="nome" style={{ width: '50%' }}
                            value={this.props.nome} onChange={this.props.onChangeNome} />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <input placeholder="Inserisci Cognome" type="text" name="cognome" style={{ width: '50%' }}
                            value={this.props.cognome} onChange={this.props.onChangeCognome} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label style={{ fontSize: 15, color: "red" }}>
                            {this.props.nomeErrore}
                        </label>
                        <label style={{ fontSize: 15, color: "red" }}>
                            {this.props.cognomeErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-disabled " onClick={() => this.props.onClickBack()}
                            style={{ width: "80px" }} disabled={true}>
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }} disabled={this.props.isValid}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step1;