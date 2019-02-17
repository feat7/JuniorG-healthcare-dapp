import React from 'react';
import { inject, observer } from 'mobx-react';
import Router from 'next/router'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { get } from '../utils';
import {login, register} from '../utils/auth';

@inject('store')
@observer
export default class Register extends React.Component {
    state = {
        fullName: '',
        email: '',
        password: '',
        repassword: '',
        dob: '',
        bloodGroup: '',
        rhFactor: '',
        loginTabActive: true
    };

    constructor(props){
        super(props);
        let {store} = props;
        if(store.user.authToken === "guesttoken"){
            console.log("Not logged in");
        }else{
            console.log("Looged in");
        }
        console.log(store.user.authToken);
    }

    handleLogin(){
        let data = {
            "email": this.state.email,
            "password": this.state.password
        };
        const { user } = this.props.store;
        console.log(this.props);
        login(data, this.props.store).then(function(response){
            console.log(response);
            const userType = get(["userType"])(response);
            if(userType == 'Receiver') {
                //To Receiver dashboard
                Router.replace('/addreciever');
            } else if(userType == 'Donar') {
                Router.replace('/addlivedonor');
            } else if(userType == 'Admin') {
                // To admin
                Router.replace('/dashboardVerify');
            }
        });
    }

    handleRegister(){
        let data = {
            "email": this.state.email,
            "password": this.state.password,
            "fullName": this.state.fullName,
            "dob": this.state.dob,
            "bloodGroup": this.state.bloodGroup,
            "rhFactor": this.state.rhFactor,
            "place": this.state.place,
            "userType": this.state.userType,
        };

        register(data, this.props.store).then(function(response){
            console.log(response);
            const userType = get(["user","userType"])(response);
            if(userType == 'Receiver') {
                //To Receiver dashboard
                Router.replace('/addreciever');
            } else if(userType == 'Donar') {
                Router.replace('/addlivedonor');
            } else if(userType == 'Admin') {
                // To admin
                Router.replace('/dashboardVerify');
            }
        });
    }

    toggleTab(){
        this.setState({loginTabActive: !this.state.loginTabActive});
        console.log(this.state.loginTabActive);
    }

    render() {
        const { ui } = this.props.store;
        return (
            <React.Fragment>
                <Header/>
                <body>
                    <Navbar/>
                    <br />
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <div className="card">
                                    <header className="card-content">
                                        <div className="tabs is-centered is-fullwidth is-toggle is-toggle-rounded">
                                            <ul>
                                                <li className=
                                                    { this.state.loginTabActive
                                                                ? "is-active"
                                                            : ""
                                                    }
                                                >
                                                    <a onClick={() => {
                                                        this.toggleTab()
                                                    }}>
                                                        <span>Login</span>
                                                    </a>
                                                </li>
                                                <li className=
                                                        { !this.state.loginTabActive
                                                        ? "is-active"
                                                        : ""
                                                    }>
                                                    <a onClick={() => {
                                                        this.toggleTab()
                                                    }}>
                                                        <span>Signup</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </header>
                                    {
                                        this.state.loginTabActive ? (
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
                                                <div className="has-text-danger">{ui.isError && ui.errorMessage}</div>
                                                <footer className="card-footer">
                                                    <a onClick={() => {
                                                        this.handleLogin()
                                                    }} href="#" className="button is-primary card-footer-item">Login</a>
                                                </footer>
                                            </div>
                                        ) : (
                                            <div className="card-content">
                                                <div className="content">
                                                    <div className="field">
                                                        <div className="control">
                                                            <input value={this.state.fullName} className="input" type="text" placeholder="Full Name" onChange={(e) => {
                                                                this.setState({ fullName: e.target.value })
                                                            }}/>
                                                        </div>
                                                    </div>
                                                    <div className="columns">
                                                        <div className="column is-8">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <input value={this.state.email} className="input" type="email" placeholder="Email" onChange={(e) => {
                                                                        this.setState({ email: e.target.value })
                                                                    }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column is-4">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="select is-info">
                                                                        <select onChange={e => {this.setState({userType: e.target.value})}} value={this.state.userType}>
                                                                            <option default value="">User Type</option>
                                                                            <option value="Donar">Donor</option>
                                                                            <option value="Receiver">Receiver</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="columns">
                                                        <div className="column is-4">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="select is-info">
                                                                        <select onChange={e => {this.setState({bloodGroup: e.target.value})}} value={this.state.bloodGroup}>
                                                                            <option default value="">Select Blood Group</option>
                                                                            <option value="a">A</option>
                                                                            <option value="b">B</option>
                                                                            <option value="o">O</option>
                                                                            <option value="ab">AB</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column is-4">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <div className="select is-info">
                                                                        <select onChange={e => {this.setState({rhFactor: e.target.value})}} value={this.state.rhFactor}>
                                                                            <option default value="">Select RH Factor</option>
                                                                            <option value="+ve">+ve</option>
                                                                            <option value="-ve">-ve</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column is-4">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <input value={this.state.dob} className="input" type="date" placeholder="Bate Of Birth" onChange={(e) => {
                                                                        this.setState({ dob: e.target.value })
                                                                    }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="columns">
                                                        <div className="column">
                                                            <div className="field">
                                                                <div className="control">
                                                                    <input value={this.state.password} className="input" type="password" placeholder="Password" onChange={(e) => {
                                                                        this.setState({ password: e.target.value })
                                                                    }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="has-text-danger">{ui.isError && ui.errorMessage}</div>
                                                <footer className="card-footer">
                                                    <a onClick={() => {
                                                        this.handleRegister();
                                                    }} href="#" className="button is-primary card-footer-item">Register</a>
                                                </footer>
                                            </div>
                                        )}
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