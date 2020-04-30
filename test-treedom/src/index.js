import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Step1 from './component/Step1.js';
import Step2 from './component/Step2.js';
import Step3 from './component/Step3.js';


class MasterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Step1 />
                    <Step2 />
                    <Step3 />
                </header>
            </div>
        );
    }
}


ReactDOM.render(
    <MasterForm />,
    document.getElementById('root')
);
