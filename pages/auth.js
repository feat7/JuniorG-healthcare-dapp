import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default class Register extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleLogin(){
        fetch('/server/api/users/login', {
            method: 'POST',
            body: {
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            // response.status     //=> number 100–599
            // response.statusText //=> String
            // response.headers    //=> Headers
            // response.url        //=> String
            console.log(response);
        }, function(error) {
            console.log(error.message); //=> String
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <body>
                    <Navbar/>
                    <div className="hero">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column">
                                        <div className="card">
                                            <header className="card-header">
                                                <p className="card-header-title">
                                                    Login
                                                </p>
                                                <a href="#" className="card-header-icon" aria-label="more options">
                                                    <span className="icon">
                                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </header>
                                            <div className="card-content">
                                                <div className="content">
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
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a onClick={() => {
                                                    this.handleLogin()
                                                }} href="#" className="card-footer-item button is-primary">Login</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <header className="card-header">
                                                <p className="card-header-title">
                                                    Register
                                                </p>
                                                <a href="#" className="card-header-icon" aria-label="more options">
                                                    <span className="icon">
                                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                                    </span>
                                                </a>
                                            </header>
                                            <div className="card-content">
                                                <div className="content">
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
                                                    <div onClick={() => {
                                                        console.log(this.state, 'Register');
                                                    }} className="button is-primary">Register</div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="#" className="card-footer-item">Login</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </body>
            </React.Fragment>
        );
    }
}