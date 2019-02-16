import React from 'react';
import Head from 'next/head';

import '../static/main.scss';
export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>My styled page</title>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </Head>
            </React.Fragment>
        );
    }
}