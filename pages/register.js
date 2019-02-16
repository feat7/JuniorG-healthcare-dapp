import React from 'react';
import clientPersist from "client-persist";
import Header from '../components/header';
import Footer from '../components/footer';
import { register } from '../utils/auth';

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
        errorMessage: ''
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <div className="control">
                                            <input value={this.state.email} className="input" type="text" placeholder="Email" onChange={(e) => {
                                                this.setState({ email: e.target.value })
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input value={this.state.password} className="input" type="password" placeholder="Password" onChange={(e) => {
                                                this.setState({ password: e.target.value })
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="has-text-danger">{this.state.errorMessage}</div>
                                    <div onClick={async () => {
                                        const success = await register({ email: this.state.email, password: this.state.password });
                                        if(success) {
                                            this.setState({ errorMessage: 'Successfully Registered' });
                                        } else {
                                            clientPersist.getItem("errorMessage").then(errorMessage => {
                                                if (errorMessage !== null) this.setState({ errorMessage });
                                            });
                                        }
                                    }} className="button is-primary">Register</div>
                                </div>
                                <div className="column">
                                    Register
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}