import React from 'react';
import { observer, inject} from 'mobx-react';
import {apiServer} from '../config';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';
import axios from 'axios';

@inject('store')
@observer
export default class DashboardVerify extends React.Component {
    state = {
        ethAddress: '',
        fetchedReciverList: false,
        receiverList: []
    };

    showDonarVerificationList = () => {
        const { user } = this.props.store;
        axios.get(`${apiServer}/api/users/to-verify-donar`, {
            headers: { Authorization: `Bearer ${user.authToken}` }
        }).then(
            response => console.log(response)
        );
    }

    showReceiverVerificationList = () => {
        const { user } = this.props.store;
        axios.get(`${apiServer}/api/users/to-verify-receiver`, {
            headers: { Authorization: `Bearer ${user.authToken}` }
        }).then(
            response => {
                this.setState({ fetchedReciverList: true, receiverList: response.data });
            }
        );
    }

    render() {
        const { user } = this.props.store;
        if(!this.state.fetchedReciverList) {
            this.showReceiverVerificationList();
            return (<div className="hero hero-body">Loading..</div>)
        }
        return(
            <React.Fragment>
                <Header/>
                <Navbar/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            {this.state.receiverList.map(item => {
                                return (
                                    <div className="box">{item.fullName} {item.email} 
                                        <button
                                        onClick={() => {
                                            axios.get(`${apiServer}/api/users/to-verify-receiver/${item._id}/verify`,
                                            {
                                                headers: { Authorization: `Bearer ${user.authToken}` }
                                            })
                                            .then(response => {this.setState({ fetchedReciverList: false })})
                                        }}
                                        className="button is-primary">Verify</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}