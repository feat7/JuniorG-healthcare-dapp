import React from 'react';
import { inject, observer } from 'mobx-react'
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import app from '../ethereum/connection/app';

export default class LiveDonorApproval extends React.Component {

    state = {
        ethAddress: '',
    };
    onSubmit = () => {
        app.approveLiveTransplant(this.state.ethAddress).then(r => console.log(r));
    };

    render() {
        console.log(this.props.store);
        return (
            <React.Fragment>
                <Header/>
                <Navbar/>
                <h2>Approve for Transplant</h2>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="field">
                                <div className="control">
                                    <input value={this.state.ethAddress} className="input" type="text" placeholder="Eth Address" onChange={(e) => {
                                        this.setState({ ethAddress: e.target.value })
                                    }}/>
                                </div>
                            </div>
                            <button className="button is-primary" onClick={this.onSubmit}>Approve for Transplant</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}