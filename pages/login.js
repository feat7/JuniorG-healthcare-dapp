import React, { Component } from 'react';
import Head from 'next/head';
import app from '../ethereum/connection/app';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Login extends Component{
    render() {
        return(
            <React.Fragment>
                <Header/>
                <div className="main-container">
                    <section className="switchable">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <h2>Login</h2>
                                            <form>
                                                <div className="row">
                                                    <div className="col-12"><input type="email" name="Email Address"
                                                                                   placeholder="Email Address"/></div>
                                                    <div className="col-12"><input type="password" name="Password"
                                                                                   placeholder="Password"/></div>
                                                    <div className="col-12">
                                                        <div className="input-checkbox"><input type="checkbox"
                                                                                               name="agree"/>
                                                            <label></label></div>
                                                        <span>Remember Me</span></div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn--primary">Create
                                                            Account
                                                        </button>
                                                    </div>
                                                    <hr/>
                                                        <div className="col-12"><span className="type--fine-print">By signing up, you agree to the <a
                                                            href="#">Terms of Service</a></span></div>
                                                </div>
                                            </form>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5"></div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}