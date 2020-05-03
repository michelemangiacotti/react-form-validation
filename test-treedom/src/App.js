import React from 'react';
import './App.css';
import Step1 from './component/Step1.js';
import Step2 from './component/Step2.js';
import Step3 from './component/Step3.js';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import { StepEnum } from './costants/StepEnum.ts';

//in questo caso ho inserito qui l'inica funzione utilità usata
//ma di solito tendo a creare delle classi utility per avere un
//codice più ordinato e mantenibile
export function isStepActive(currentStep, numberActiveStep) {
    return currentStep !== numberActiveStep ? 'disabled-step' : 'container-step';
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: StepEnum.Primo,
            nome: '',
            nomeErrore: '',
            cognome: '',
            password: '',
            cognomeErrore: '',
            email: '',
            emailErrore: '',
            passwordErrore: '',
            confermaPassword: ''
        }

    }

    

    onChangeNomeHandler = val => {
        this.setState({ nome: val.target.value });
    };
    onChangeCongnomeHandler = val => {
        this.setState({ cognome: val.target.value });
    };
    onChangePasswordHandler = val => {
        this.setState({ password: val.target.value });
    };
    onChangeConfermaPasswordHandler = val => {
        this.setState({ confermaPassword: val.target.value });
    };
    onChangeEmailHandler = val => {
        this.setState({ email: val.target.value });
    }


    handleNextClick() {
        let emailErrore = '';
        let nomeErrore = '';
        let cognomeErrore = '';
        let passwordErrore = '';
        let isNotValid = false;

        // promisi per validazioni fake
        let promise = new Promise((resolve, reject) => {
            if (this.state.step === StepEnum.Primo) {
                const re = /^[a-zA-Z]+$/;
                if (this.state.nome === '' || !re.test(this.state.nome)) {
                    isNotValid = true;
                    this.setState({ nomeErrore: 'Nome non valorizzato, con spazi o di tipo numerico', cognomeErrore });
                } else {
                    if (this.state.cognome === '' || !re.test(this.state.cognome)) {
                        isNotValid = true;
                        this.setState({ cognomeErrore: 'Cognome non valorizzato, con spazi o di tipo numerico', nomeErrore });
                    }
                }
            }
            if (this.state.step === StepEnum.Secondo) {
                if (this.state.password === '' || this.state.password !== this.state.confermaPassword ||
                    this.state.confermaPassword === '') {
                    isNotValid = true;
                    this.setState({ passwordErrore: 'Campi non valorizzati o le passwords non corrispondono ' });
                }
            }
            if (this.state.step === StepEnum.Terzo) {
                if (this.state.email === '' || !this.state.email.includes("@")) {
                    isNotValid = true;
                    this.setState({ emailErrore: 'Email non valido' });
                }
            }
            if (isNotValid) {
                reject();
            } else {
                resolve();

            }
        });

        promise.then(res => {
            this.setState({ step: this.state.step + 1, emailErrore, nomeErrore, cognomeErrore, passwordErrore });
        }).catch(error => {
            console.log("impossibile avanzare al prossimo step validazione lato server non corretta");
        });
    }

    handleBackClick() {
        this.setState({ step: this.state.step - 1 });
    }

    handleNewForm() {
        this.setState({ step: StepEnum.Primo, nome: '', cognome: '', password: '', email: '', confermaPassword: '' });
    }

    isMobile() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        let isMobile = toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
        return isMobile;
    }

    sendForm() {
        return <div className="app-container">
            <label className="title-success-form">
                Hai inviato i dati inseriti, controlla la tua mail per confermare la registrazione
             </label>
            <Button className="btn-success" onClick={() => this.handleNewForm()}>
                Ritorna alla registrazione 
            </Button>
        </div>;
    }

    render() {
        const isMobile = this.isMobile();
        // console.log("Is mobile: " + navigator.userAgent);

        if (isMobile) {
            if (this.state.step === StepEnum.Finale) {
                return (
                    this.sendForm()
                )
            } else {
                return (
                    <Carousel activeIndex={this.state.step-1} controls={false}>
                        <Carousel.Item>
                            <div className="app-container">
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
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="app-container">
                                <Step2 onClickNext={() => this.handleNextClick()}
                                    confermaPassword={this.state.confermaPassword}
                                    password={this.state.password}
                                    onChangePassword={this.onChangePasswordHandler}
                                    onChangeConfermaPassword={this.onChangeConfermaPasswordHandler}
                                    passwordErrore={this.state.passwordErrore}
                                    onClickBack={() => this.handleBackClick()}
                                    step={this.state.step}
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="app-container">
                                <Step3 onClickNext={() => this.handleNextClick()}
                                    email={this.state.email}
                                    emailErrore={this.state.emailErrore}
                                    onChangeEmail={this.onChangeEmailHandler}
                                    onClickBack={() => this.handleBackClick()}
                                    step={this.state.step}

                                />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                )
            }
        } else {

            if (this.state.step === StepEnum.Finale) {
                return (
                    this.sendForm()
                )
            } else {
                return (
                    <div className="app-container">
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
                        <Step2 onClickNext={() => this.handleNextClick()}
                            confermaPassword={this.state.confermaPassword}
                            password={this.state.password}
                            onChangePassword={this.onChangePasswordHandler}
                            onChangeConfermaPassword={this.onChangeConfermaPasswordHandler}
                            passwordErrore={this.state.passwordErrore}
                            onClickBack={() => this.handleBackClick()}
                            step={this.state.step} />
                        <Step3 onClickNext={() => this.handleNextClick()}
                            email={this.state.email}
                            emailErrore={this.state.emailErrore}
                            onChangeEmail={this.onChangeEmailHandler}
                            onClickBack={() => this.handleBackClick()}
                            step={this.state.step} />
                    </div>
                );
            }
        }
    }
    
}
export default App;

