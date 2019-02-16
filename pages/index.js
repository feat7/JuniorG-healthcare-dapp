import React, { Component } from 'react';
import Head from 'next/head';
import app from '../ethereum/connection/app';

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
        <div className="nav-container">
            <div>
                <div className="bar bar--sm visible-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-md-2">
                                <a href="index.html"> <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"/> <img className="logo logo-light" alt="logo" src="img/logo-light.png"/> </a>
                            </div>
                            <div className="col-9 col-md-10 text-right">
                                <a href="#" className="hamburger-toggle" data-toggle-className="#menu1;hidden-xs hidden-sm"> <i className="icon icon--sm stack-interface stack-menu"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav id="menu1" className="bar bar-1 hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-2 hidden-xs">
                                <div className="bar__module">
                                    <a href="index.html"> <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"/> <img className="logo logo-light" alt="logo" src="img/logo-light.png"/> </a>
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal text-left">
                                        <li> <a href="#">
                                        Single Link
                                    </a> </li>
                                        <li className="dropdown"> <span className="dropdown__trigger">
                                        Dropdown Slim
                                    </span>
                                            <div className="dropdown__container">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="dropdown__content col-lg-2">
                                                            <ul className="menu-vertical">
                                                                <li> <a href="#">Single Link</a> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown"> <span className="dropdown__trigger">
                                        Dropdown Wide
                                    </span>
                                            <div className="dropdown__container">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="dropdown__content row w-100">
                                                            <div className="col-lg-3">
                                                                <h5>Menu Title</h5>
                                                                <ul className="menu-vertical">
                                                                    <li> <a href="#">Single Link</a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <h5>Menu Title</h5>
                                                                <ul className="menu-vertical">
                                                                    <li> <a href="#">Single Link</a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <h5>Menu Title</h5>
                                                                <ul className="menu-vertical">
                                                                    <li> <a href="#">Single Link</a> </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <h5>Menu Title</h5>
                                                                <ul className="menu-vertical">
                                                                    <li> <a href="#">Single Link</a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bar__module">
                                    <a className="btn btn--sm type--uppercase" href="#customise-template"> <span className="btn__text">
                                    Try Builder
                                </span> </a>
                                    <a className="btn btn--sm btn--primary type--uppercase" href="#purchase-template"> <span className="btn__text">
                                    Buy Now
                                </span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
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
            <footer className="space--sm footer-1 text-center-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-inline list--hover">
                                <li> <a href="#"><span>Our Company</span></a> </li>
                                <li> <a href="#"><span>Locations</span></a> </li>
                                <li> <a href="#"><span>Products</span></a> </li>
                                <li> <a href="#"><span>Work With Us</span></a> </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-right text-center-xs">
                            <ul className="social-list list-inline list--hover">
                                <li><a href="#"><i className="socicon socicon-google icon icon--xs"></i></a></li>
                                <li><a href="#"><i className="socicon socicon-twitter icon icon--xs"></i></a></li>
                                <li><a href="#"><i className="socicon socicon-facebook icon icon--xs"></i></a></li>
                                <li><a href="#"><i className="socicon socicon-instagram icon icon--xs"></i></a></li>
                            </ul>
                            <a href="#" className="btn type--uppercase"> <span className="btn__text">
                        Contact Us
                    </span> </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"> <img alt="Image" className="logo" src="img/logo-dark.png"/> <span className="type--fine-print">© <span className="update-year"></span> Stack Inc.</span> <a className="type--fine-print" href="#">Privacy Policy</a> <a className="type--fine-print" href="#">Legal</a> </div>
                    </div>
                </div>
            </footer>
        </div>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/flickity.min.js"></script>
        <script src="js/parallax.js"></script>
        <script src="js/smooth-scroll.min.js"></script>
        <script src="js/scripts.js"></script>
        </React.Fragment>
        );
    }
}