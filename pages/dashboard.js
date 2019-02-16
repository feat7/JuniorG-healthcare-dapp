import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Dashboard extends React.Component {

    state = {
        ethAddress: '',
        priority: ''
    };

    render() {
        return (
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
                            <button className="button is-primary">Register for kidney donation</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}