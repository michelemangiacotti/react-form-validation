import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Step1 extends React.Component {

    updateEmailAddress(e) {
        this.setState({ nome: e.target.value });
      }
    render() {
        return (
            <Container fluid="md" style={{ width: '100%' }} className={this.props.step !== 1 ? 'disabledStep' : ''}>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ alignContent: 'center' }}>
                            Primo Step
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Nome:
                            <input type="text" name="nome" style={{ width: '50%' }} ref={this.props.nome}   />
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Cognome:
                            <input type="text" name="cognome" style={{ width: '50%' }} ref={this.props.cognome}  />
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <Button className="btn-disabled " onClick={() => this.props.onClickBack()} style={{ width: "70px" }} disabled={true}>
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