import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Register extends React.Component {
    state = {
        email: '',
        password: ''
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
                                    <div class="field">
                                        <div class="control">
                                            <input value={this.state.email} class="input" type="text" placeholder="Email" onChange={(e) => {
                                                this.setState({ email: e.target.value })
                                            }}/>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input value={this.state.password} class="input" type="password" placeholder="Password" onChange={(e) => {
                                                this.setState({ password: e.target.value })
                                            }}/>
                                        </div>
                                    </div>
                                    <div onClick={() => {
                                        console.log(this.state, 'Register');
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