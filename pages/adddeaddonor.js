import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';

export default class Addlivedonor extends React.Component {
    state = {
        ethAddress: '',
    };
    onSubmit = () => {
        app.addDeadDonor(this.state.ethAddress).then(r => console.log(r));
    };
    render() {
        return(
            <React.Fragment>
                <Header/>
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
                            <button className="button is-primary" onClick={this.onSubmit}>Register for Kidney Donation</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}