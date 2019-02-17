import React from 'react';
import Header from '../components/header';
import DashboardNav from '../components/dashboardnav';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';

export default class AddDeadDonor extends React.Component {
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
                <DashboardNav/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="box">
                                <div className="field">
                                    <div className="control">
                                        <input value={this.state.ethAddress} className="input" type="text" placeholder="Eth Address" onChange={(e) => {
                                            this.setState({ ethAddress: e.target.value })
                                        }}/>
                                    </div>
                                </div>
                                <button className="button is-primary" onClick={this.onSubmit}>Add dead donor</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}