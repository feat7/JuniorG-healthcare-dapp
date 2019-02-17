import React from 'react';
import {apiServer} from '../config';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import app from '../ethereum/connection/app';
import axios from 'axios';
import ShowList from '../components/showList';

export default class Patients extends React.Component {
    static async getInitialProps(){
        const recievers = await app.getRecievers().then(r => {return r});
        return { recievers };
    }

    showBlockDetails(item) {
        axios.get(`${apiServer}/api/users/get-details/${item}`)
        .then(response => console.log(response.data));
        // getAllData({ ethAddress: item }).then(res => console.log(res));
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
                                        <ShowList list={this.props.recievers}/>
                                        {this.props.recievers.map((item, index) => {
                                            return(
                                                <div className="timeline-item">
                                                    <div className="timeline-marker"></div>
                                                    <div className="timeline-content">
                                                        <p className="heading">Block {index+1}</p>
                                                        <p>{this.showBlockDetails(item)}</p>
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