import React from 'react';
import Head from 'next/head';

import '../static/main.scss';
export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Junior G | Transparent Organ Donation and Monitoring Platform</title>
                    <link href="./static/css/bulma.min.css" rel="stylesheet" type="text/css" media="all"/>
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                </Head>
            </React.Fragment>
        );
    }
}