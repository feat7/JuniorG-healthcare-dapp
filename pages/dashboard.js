import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Footer/>
            </React.Fragment>
        );
    }
}