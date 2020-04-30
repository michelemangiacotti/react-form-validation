import React from 'react';
import Container from 'react-bootstrap/Container'
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Step2 extends React.Component {
    render() {
        return (
            <Container fluid="md" style={{ width: '100%' }}  className = { this.props.step !==2 ? 'disabledStep' : ''}>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label style={{ alignContent: 'center' }}>
                            Secondo Step
                            </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Password:
                            <input type="password" name="password" style={{ width: '50%' }} ref={this.props.password}/>
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <label>
                            Ripeti Password:
                            <input type="password" name="repeatPassword" style={{ width: '50%' }}  ref={this.props.confermaPassword}/>
                        </label>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '10px' }}>
                    <Col>
                        <Button className="btn-success" onClick={() => this.props.onClickBack()} style={{ width: "70px" }}>
                            Indietro
                        </Button>
                        <Button className="btn-success" onClick={() => this.props.onClickNext()} style={{ marginLeft: "15px", width: "70px" }} disabled={false}>
                            Avanti
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Step2;
