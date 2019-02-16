import React, { Component } from 'react';
import Head from 'next/head';
import app from '../ethereum/connection/app';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Main extends Component {
    async componentDidMount() {
        await app.getAdmin().then(r => console.log(r));
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <body>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src="./static/images/logo.png" />
                            </a>

                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                               data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item">
                                    Junior G
                                </a>

                                <a className="navbar-item">
                                    Home
                                </a>

                                <a className="navbar-item">
                                    Track Status
                                </a>

                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <a className="button is-primary">
                                            <strong>Sign up</strong>
                                        </a>
                                        <a className="button is-light">
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="columns">
                        <div className="column">
                            <img src="./static/images/donate.svg" />
                        </div>
                        <div className="column">
                            <section className="hero">
                                <div className="hero-body">
                                    <h1 className="title">
                                        Hero title
                                    </h1>
                                    <h2 className="subtitle">
                                        Hero subtitle
                                    </h2>
                                </div>
                            </section>
                        </div>
                    </div>
                </body>
            </React.Fragment>
        );
    }
}