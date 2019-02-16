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
        <Head>
            <title>My styled page</title>
            <link href="./static/css/stack-interface.css" rel="stylesheet" type="text/css" media="all"/>
            <link href="./static/css/socicon.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/flickity.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/theme.css" rel="stylesheet" type="text/css" media="all" />
            <link href="./static/css/custom.css" rel="stylesheet" type="text/css" media="all" />
        </Head>
        <Header/>
        <div className="main-container">
            <section className="cover space--lg unpad--bottom bg--secondary switchable text-center">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <div className="mt--2">
                                <h1>Streamline your workflow</h1>
                                <p className="lead"> Build lean, beautiful websites with a clean and contemporary look to suit a range of purposes. </p>
                                <a className="btn btn--primary type--uppercase" href="#customise-template"> <span className="btn__text">
							Launch The Builder
						</span> </a> <span className="block type--fine-print">or <a href="index.html">view the demos</a></span> </div>
                        </div>
                        <div className="col-md-6 col-lg-5"> <img alt="Image" src="img/device-3.png"/> </div>
                    </div>
                </div>
            </section>
            <section className="switchable feature-large">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-5 col-md-6 switchable__text">
                            <h2>Perfect for bootstrapped startups</h2>
                            <p className="lead"> Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'. </p>
                            <a className="btn btn--primary type--uppercase" href="#"> <span className="btn__text">
                        Explore Detail
                    </span> </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="boxed boxed--lg boxed--border box-shadow-wide">
                                <div className="slider" data-paging="true">
                                    <ul className="slides">
                                        <li className="col-12">
                                            <div className="feature feature-3 text-center"> <i className="icon icon--lg icon-Mail-3 color--primary"></i>
                                                <h4>Mailer Integrations</h4>
                                                <p> Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns </p> <a href="#">
                                        Learn More
                                    </a> </div>
                                        </li>
                                        <li className="col-12">
                                            <div className="feature feature-3 text-center"> <i className="icon icon--lg icon-Air-Balloon color--primary"></i>
                                                <h4>Diverse Icons</h4>
                                                <p> Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes. </p> <a href="#">
                                        Learn More
                                    </a> </div>
                                        </li>
                                        <li className="col-12">
                                            <div className="feature feature-3 text-center"> <i className="icon icon--lg icon-Bacteria color--primary"></i>
                                                <h4>Modular Design</h4>
                                                <p> Combine blocks from a range of categories to build pages that are rich in visual style and interactivity </p> <a href="#">
                                        Learn More
                                    </a> </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </React.Fragment>
        );
    }
}