import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
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
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/flickity.min.js"></script>
            <script src="js/parallax.js"></script>
            <script src="js/smooth-scroll.min.js"></script>
            <script src="js/scripts.js"></script>
            </React.Fragment>
        );
    }
}