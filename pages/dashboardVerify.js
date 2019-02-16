import React from 'react';
import { observer, inject} from 'mobx-react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';

@inject('store')
@observer
export default class DashboardVerify extends React.Component {
    state = {
        ethAddress: '',
    };

    showVerificationList = () => {
        
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <Navbar/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            {this.showVerificationList()}
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}