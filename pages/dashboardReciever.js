import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';

export default class DashboardReciever extends React.Component {
    state = {
        ethAddress: '',
        priority: ''
    };
    onSubmit = () => {
        app.addReciever(this.state.ethAddress, this.state.priority).then(r => console.log(r));
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
                                    <input value={this.state.priority} className="input" type="text" placeholder="Priority" onChange={(e) => {
                                        this.setState({ priority: e.target.value })
                                    }}/>
                                </div>
                            </div>
                            <button className="button is-primary" onClick={this.onSubmit}>Register for Kidney Reciever</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}