import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                        <strong>Dapp</strong> by <a href="https://github.com/feat7/JuniorG-healthcare-dapp">Team Junior G</a>. .
                        </p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}