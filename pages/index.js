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
                    <section className="section">
                        <div className="container">
                            <h1 className="title">
                                Hello World
                            </h1>
                            <p className="subtitle">
                                My first website with <strong>Bulma</strong>!
                            </p>
                        </div>
                    </section>
                </body>
            </React.Fragment>
        );
    }
}