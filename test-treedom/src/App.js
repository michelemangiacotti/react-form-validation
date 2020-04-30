import React from 'react';
import './App.css';
import Step1 from './component/Step1.js';
import Step2 from './component/Step2.js';
import Step3 from './component/Step3.js';
import Button from 'react-bootstrap/Button'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            nome: '',
            cognome: '',
            email: '',
            password: '',
            confermaPassword: ''
        }
    }

    componentDidMount() {
        console.log("componenti did mount" + this.state.step);

    }


    handleNextClick() {

        console.log("sto cliccando avanti");

        let promise = new Promise((resolve, reject) => {

            if (this.state.step === 1) {
                const re = /^[0-9\b]+$/;
                if (this.state.nome === '' || re.test(this.state.nome)) {
                    reject(Error("wrong server validation"));
                    window.alert("errore nome");
                } else {
                    if (this.state.cognome === '' || re.test(this.state.cognome)) {
                        reject(Error("wrong server validation"));
                    }
                }
            } else {
                if (this.state.step === 2) {
                    if (this.state.password === '' || this.state.password !== this.state.confermaPassword ||
                        this.state.password === '') {
                        reject(Error("wrong server validation"));
                    }

                }
            }
            // if (this.state.step === 3){

            // }
        });

        promise.then(res => {
            this.setState({ step: this.state.step + 1 });
            console.log(this.state.step);
        })
            .catch(error => {
                console.log("impossibile passare al prossimo step", error);
            });
    }

    handleRegistrationClick() {

        //chiamata api mock validation campi
        this.setState({ step: this.state.step + 1 });
        console.log("sto cliccando per registrarmi");
    }

    handleBackClick() {

        //chiamata api mock validation campi

        console.log("sto cliccando indietro");
        this.setState({ step: this.state.step - 1 });
        console.log(this.state.step);

    }

    handleNewForm() {
        this.setState({ step: 1, nome: '', cognome: '', password: '', email: '', confermaPassword: '' });

    }

    render() {
        console.log("rendered" + this.state.step)

        if (this.state.step === 4) {
            return (
                <div className="App">
                    Hai mandato i dati
                    <br />
                    <Button className="btn-success" onClick={() => this.handleNewForm()}>
                        Ritorna alla home page
                        </Button>
                </div>
            )
        } else {

            return (
                <div className="App">
                    <header className="App-header">
                        <Step1 onClickNext={() => this.handleNextClick()}
                            onClickBack={() => this.handleBackClick()}
                            step={this.state.step}
                            nome={this.state.nome}
                            cognome={this.state.cognome} />
                        <br />
                        <Step2 onClickNext={() => this.handleNextClick()}
                            confermaPassword={this.state.confermaPassword}
                            password={this.state.password}
                            onClickBack={() => this.handleBackClick()}
                            step={this.state.step} />
                        <br />
                        <Step3 onClickRegistration={() => this.handleRegistrationClick()}
                            email={this.state.email}
                            onClickBack={() => this.handleBackClick()}
                            step={this.state.step} />
                    </header>
                </div>
            );
        }
    }
}
export default App;

