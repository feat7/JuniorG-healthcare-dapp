import React, { Component } from 'react';

export default class DashboardNav extends Component{
    render(){
        return (
            <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <h1 class="navbar-item has-text-primary has-text-bold" href="/">
                        Junior G
                    </h1>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        How this works?
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a href="https://github.com/feat7" class="navbar-item">
                            About
                        </a>
                        <a href="https://github.com/feat7/JuniorG-healthcare-dapp" class="navbar-item">
                            Github
                        </a>
                        </div>
                    </div>
                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a href="/auth" class="button is-primary">
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