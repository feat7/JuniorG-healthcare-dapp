import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import app from '../ethereum/connection/app';

export default class DeadDoners extends React.Component {
    static async getInitialProps(){
        const recievers = await app.getDeadDonors().then(r => {return r});
        return { recievers };
    };

    render() {
        return(
            <React.Fragment>
                <Header/>
                <Navbar />
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="field">
                                <div className="control">
                                    <div className="timeline">
                                        <header className="timeline-header">
                                            <span className="tag is-medium is-primary">Start</span>
                                        </header>
                                        {this.props.recievers.map((item, index) => {
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