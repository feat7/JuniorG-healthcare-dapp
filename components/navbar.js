import React, { Component } from 'react';

export default class Navbar extends Component{
    render(){
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="./static/images/logo.png" alt="Junior G" />
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul className="navbar-menu-new">
                                        <li className="is-active"><a href="/">Home</a></li>
                                        <li><a href="">Features</a></li>
                                        <li><a href="">Terms and Conditions</a></li>
                                        <li><a href="">Privacy Policy</a></li>
                                        <li><a href="/auth">Login/Singup</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}