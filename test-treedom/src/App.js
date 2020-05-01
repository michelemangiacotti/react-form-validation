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
            nomeErrore: '',
            cognome: '',
            cognomeErrore: '',
            email: '',
            emailErrore: '',
            passwordErrore: '',
            confermaPassword: ''
        }

    }


    onChangeNomeHandler = val => {
        console.log("on change name");
        this.setState({ nome: val.target.value });
    };
    onChangeCongnomeHandler = val => {
        console.log("on change name");
        this.setState({ cognome: val.target.value });
    };
    onChangePasswordHandler = val => {
        console.log("on change name");
        this.setState({ password: val.target.value });
    };
    onChangeConfermaPasswordHandler = val => {
        console.log("on change name");
        this.setState({ confermaPassword: val.target.value });
    };
    onChangeEmailHandler = val => {
        console.log("on change name");
        this.setState({ email: val.target.value });
    }

    componentDidMount() {
        console.log("componenti did mount" + this.state.step);

    }


    handleNextClick() {
        let emailErrore = '';
        let nomeErrore = '';
        let cognomeErrore = '';
        let passwordErrore = '';

        console.log("sto cliccando avanti");
        let promise = new Promise((resolve, reject) => {
            if (this.state.step === 1) {
                const re = /^[0-9\b]+$/;
                if (this.state.nome === '' || re.test(this.state.nome)) {
                    reject(Error("wrong server validation"));
                    this.setState({ nomeErrore: 'Nome non valorizzato o di tipo numerico' });
                } else {
                    if (this.state.cognome === '' || re.test(this.state.cognome)) {
                        reject(Error("wrong server validation"));
                        this.setState({ cognomeErrore: 'Cognome non valorizzato o di tipo numerico' });
                    }
                }
            }
            if (this.state.step === 2) {
                if (this.state.password === '' || this.state.password !== this.state.confermaPassword ||
                    this.state.confermaPassword === '') {
                    reject(Error("wrong server validation"));
                    this.setState({ passwordErrore: 'Campi non valorizzata o le passwords non corrispondono ' });
                }
            }
            if (this.state.step === 3) {
                if (this.state.email === '' || !this.state.email.includes("@")) {
                    reject(Error("wrong server validation"));
                    this.setState({ emailErrore: 'Email non valido' });
                }
            }
            // se non abbiamo validazione fallite 
            resolve();
        });

        promise.then(res => {
            this.setState({ step: this.state.step + 1, emailErrore, nomeErrore, cognomeErrore, passwordErrore });
            console.log(this.state.step);
        }).catch(error => {
            console.log("impossibile avanzare al prossimo step", error);
        });
    }


    handleBackClick() {
        console.log("sto cliccando indietro");
        this.setState({ step: this.state.step - 1 });
        console.log("Step Back: " + this.state.step);

    }

    handleNewForm() {
        this.setState({ step: 1, nome: '', cognome: '', password: '', email: '', confermaPassword: '' });
    }

    render() {
        console.log("rendered" + this.state.step)

        if (this.state.step === 4) {
            return (
                <div className="App">
                    Hai inviato i dati controlla la tua mail
                    <br />
                    <Button className="btn-success" onClick={() => this.handleNewForm()}>
                        Ritorna alla home page
                        </Button>
                </div>
            )
        } else {

            return (
                <form className="App">
                    <Step1 onClickNext={() => this.handleNextClick()}
                        onClickBack={() => this.handleBackClick()}
                        onChangeNome={this.onChangeNomeHandler}
                        onChangeCognome={this.onChangeCongnomeHandler}
                        step={this.state.step}
                        nome={this.state.nome}
                        cognome={this.state.cognome}
                        nomeErrore={this.state.nomeErrore}
                        cognomeErrore={this.state.cognomeErrore}

                    />
                    <br />
                    <Step2 onClickNext={() => this.handleNextClick()}
                        confermaPassword={this.state.confermaPassword}
                        password={this.state.password}
                        onChangePassword={this.onChangePasswordHandler}
                        onChangeConfermaPassword={this.onChangeConfermaPasswordHandler}
                        passwordErrore={this.state.passwordErrore}
                        onClickBack={() => this.handleBackClick()}
                        step={this.state.step} />
                    <br />
                    <Step3 onClickNext={() => this.handleNextClick()}
                        email={this.state.email}
                        emailErrore={this.state.emailErrore}
                        onChangeEmail={this.onChangeEmailHandler}
                        onClickBack={() => this.handleBackClick()}
                        step={this.state.step} />
                </form>
            );
        }
    }
}
export default App;

