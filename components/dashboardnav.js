import React, { Component } from 'react';

export default class DashboardNav extends Component{
    render(){
        return (
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <h1 className="navbar-item has-text-primary has-text-bold" href="/">
                        Junior G
                    </h1>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        How this works?
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a href="https://github.com/feat7" className="navbar-item">
                            About
                        </a>
                        <a href="https://github.com/feat7/JuniorG-healthcare-dapp" className="navbar-item">
                            Github
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/auth" className="button is-primary">
                                <strong>Logout</strong>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}