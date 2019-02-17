import React from 'react';
import { observer, inject} from 'mobx-react';
import {apiServer} from '../config';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';
import HEREMap from 'here-maps-react'
import axios from 'axios';

@inject('store')
@observer
export default class DashboardVerify extends React.Component {
    state = {
        ethAddress: '',
        fetchedReceiverList: false,
        fetchedDonorList: false,
        receiverList: [],
        donorList: []
    };

    showDonorVerificationList = () => {
        const { user } = this.props.store;
        axios.get(`${apiServer}/api/users/to-verify-donar`, {
            headers: { Authorization: `Bearer ${user.authToken}` }
        }).then(
            response => {
                this.setState({ fetchedDonorList: true, donorList: response.data });
            }
        );
    }

    showReceiverVerificationList = () => {
        const { user } = this.props.store;
        axios.get(`${apiServer}/api/users/to-verify-receiver`, {
            headers: { Authorization: `Bearer ${user.authToken}` }
        }).then(
            response => {
                this.setState({ fetchedReceiverList: true, receiverList: response.data });
            }
        );
    }

    render() {
        const { user } = this.props.store;
        if(!this.state.fetchedReceiverList && !this.state.fetchedDonorList) {
            this.showReceiverVerificationList();
            this.showDonorVerificationList();
            return (<div className="hero hero-body">Loading..</div>)
        }

        return(
            <React.Fragment>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <body>
                    <Header/>
                    <Navbar/>
                    <div className="hero">
                        <div className="hero-body">
                            <div className="columns">
                                <div className="column is-4 is-offset-2">
                                    <nav className="panel">
                                        <p className="panel-heading">
                                            Receivers Profile
                                        </p>
                                        <div className="panel-block">
                                            <p className="control has-icons-left">
                                                <input className="input is-small" type="text" placeholder="search" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-search" aria-hidden="true"/>
                                                </span>
                                            </p>
                                        </div>
                                        {this.state.receiverList.map(item => {
                                            return (
                                                <div className="panel-block" key={item.id}>
                                                    <article className="message is-primary" style={{ width: '100%'}}>
                                                        <div className="message-body">
                                                            {item.fullName} | {item.bloodGroup} {item.rhFactor}
                                                            <br />
                                                            <a href="#">{item.email}</a>
                                                            <br />
                                                            {item.ethAddress}
                                                        </div>
                                                        <a onClick={() => {
                                                            app.verifyRecieverByAdmin().then(() => {
                                                                axios.get(`${apiServer}/api/users/to-verify-receiver/${item._id}/verify`,
                                                                    {
                                                                        headers: { Authorization: `Bearer ${user.authToken}` }
                                                                    })
                                                                    .then(response => {this.setState({ fetchedReceiverList: false })})
                                                            });
                                                        }} className="button is-primary is-fullwidth">Approve</a>
                                                    </article>
                                                </div>
                                            )
                                        })}
                                        <div className="panel-block">
                                            <button className="button is-link is-outlined is-fullwidth">
                                                reset all filters
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                                <div className="column is-4">
                                    <nav className="panel">
                                        <p className="panel-heading">
                                            Donors Profile
                                        </p>
                                        <div className="panel-block">
                                            <p className="control has-icons-left">
                                                <input className="input is-small" type="text" placeholder="search" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-search" />
                                                </span>
                                            </p>
                                        </div>
                                        {this.state.donorList.map(item => {
                                            return (
                                                <div className="panel-block" key={item.id}>
                                                    <article className="message is-primary" style={{ width: '100%'}}>
                                                        <div className="message-body">
                                                            {item.fullName} | {item.bloodGroup} {item.rhFactor}
                                                            <br />
                                                            <a href="#">{item.email}</a>
                                                            <br />
                                                            {item.ethAddress}
                                                        </div>
                                                        <a onClick={() => {
                                                            if(item.live) {
                                                                app.verifyLiveDonorByAdmin(item.ethAddress).then(() => {
                                                                    axios.get(`${apiServer}/api/users/to-verify-donar/${item._id}/verify`,
                                                                        {
                                                                            headers: {Authorization: `Bearer ${user.authToken}`}
                                                                        })
                                                                        .then(response => {
                                                                            this.setState({fetchedDonorList: false})
                                                                        })
                                                                });
                                                            }else{
                                                                app.verifyDeadDonorByAdmin(item.ethAddress).then(() => {
                                                                    axios.get(`${apiServer}/api/users/to-verify-donar/${item._id}/verify`,
                                                                        {
                                                                            headers: {Authorization: `Bearer ${user.authToken}`}
                                                                        })
                                                                        .then(response => {
                                                                            this.setState({fetchedDonorList: false})
                                                                        })
                                                                });
                                                            }
                                                        }} className="button is-primary is-fullwidth">Approve</a>
                                                    </article>
                                                </div>
                                            )
                                        })}
                                        <div className="panel-block">
                                            <button className="button is-link is-outlined is-fullwidth">
                                                reset all filters
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HEREMap
                        appId="0WRIdFO7ozbQYXr2hAUI"
                        appCode="NWMVFrMx4bojna9nnPhA3g"
                        center={{ lat: -12.0464, lng: -77.0428 }}
                        zoom={12}
                    />
                    <Footer/>
                </body>
            </React.Fragment>
        );
    }
}