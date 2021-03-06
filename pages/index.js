import React, { Component } from 'react';
import app from '../ethereum/connection/app';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default class Main extends Component {
    async componentDidMount() {
        await app.getAdmin().then(r => console.log(r));
    }

    render() {
        return (
            <React.Fragment>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Header/>
                <Navbar/>
                <section className="hero is-fullheight is-default is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-vcentered">
                                <div className="column is-5">
                                    <figure className="image is-4by3">
                                        <img src="./static/images/donate.svg" alt="Description" />
                                    </figure>
                                </div>
                                <div className="column is-6 is-offset-1">
                                    <h1 className="title is-2">
                                        Junior G
                                    </h1>
                                    <h2 className="subtitle is-4">
                                        Online transparent platform for managing and monitoring organ transplant
                                    </h2>
                                    <br/>
                                        <p className="has-text-centered">
                                            <a href="/auth" className="button is-medium is-info is-outlined">
                                                Need an Organ
                                            </a>
                                            &nbsp;&nbsp;&nbsp;
                                            <a href="/auth" className="button is-medium is-info is-outlined">
                                                Donate an Organ
                                            </a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}