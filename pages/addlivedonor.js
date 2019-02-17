import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import app from '../ethereum/connection/app';
import { runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Addlivedonor extends React.Component {
    state = {
        ethAddress: '',
    };
    onSubmit = () => {
        const { ui } = this.props.store;

        app.addLiveDonor(this.state.ethAddress).then(r => runInAction(() => {
            if(r=='success') {
                ui.isSuccess = true;
                ui.successMessage = "Live donor added successfully";
            }
            else ui.isSuccess = false;
            console.log(r);
        }));
    };
    render() {
        const { ui } = this.props.store;
        return(
            <React.Fragment>
                <Header/>
                <Navbar/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="field">
                                <div className="control">
                                    <input value={this.state.ethAddress} className="input" type="text" required placeholder="Eth Address" onChange={(e) => {
                                        this.setState({ ethAddress: e.target.value })
                                    }}/>
                                </div>
                            </div>
                            <button className="button is-primary" onClick={this.onSubmit}>Register for Kidney Donation</button>
                            <div className="has-text-success">{ui.isSuccess && ui.successMessage}</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}