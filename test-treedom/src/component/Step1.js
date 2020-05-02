import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { isStepActive } from '../App';



class Step1 extends React.Component {

    render() {
        return (
            <Container fluid="md" className={isStepActive(this.props.step, 1)}>
                <Row >
                    <Col>
                        <label className="title-step">
                            Primo Step
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input placeholder="Inserisci Nome"
                            type="text" name="nome"
                            className="input-style"
                            value={this.props.nome}
                            onChange={this.props.onChangeNome} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input placeholder="Inserisci Cognome"
                            type="text" name="cognome"
                            className="input-style"
                            value={this.props.cognome}
                            onChange={this.props.onChangeCognome} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="error-label">
                            {this.props.nomeErrore}
                        </label>
                        <label className="error-label">
                            {this.props.cognomeErrore}
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn-disabled "
                            onClick={() => this.props.onClickBack()}
                            style={{ width: "80px" }}
                            disabled={true}>
                            Indietro
                        </Button>
                        <Button className="btn-success"
                            onClick={() => this.props.onClickNext()}
                            style={{ marginLeft: "15px", width: "80px" }}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default Step1;