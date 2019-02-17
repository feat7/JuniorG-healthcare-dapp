import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import app from '../ethereum/connection/app';

export default class Patients extends React.Component {
    constructor(props){
        super(props);
    }

    static async getInitialProps(){
        var tx = {};
        const receivers = await app.getTransplants().then(r => {return r}) || [];
        receivers.map((item) => {
            tx[item] = app.getTransplant(item).then(r => {return r});
        });
        return { receivers: receivers, tx };
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <Navbar/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="field">
                                <div className="control">
                                    <div className="timeline">
                                        <header className="timeline-header">
                                            <span className="tag is-medium is-primary">Start</span>
                                        </header>
                                        <br />
                                        {this.props.receivers.map((item, index) => {
                                            return(
                                                <div className="timeline-item">
                                                    <div className="timeline-marker"></div>
                                                    <div className="timeline-content">
                                                        <p className="heading">Block {index+1}</p>
                                                        <p>{item}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <div className="timeline-header">
                                            <span className="tag is-medium is-primary">End</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}