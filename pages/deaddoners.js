import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import app from '../ethereum/connection/app';

export default class DeadDoners extends React.Component {
    static async getInitialProps(){
        const recievers = await app.getLiveDonors().then(r => {return r});
        return { recievers };
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="field">
                                <div className="control">
                                    {this.props.recievers.map(item => {
                                        return(
                                            <div key={item} className="card">
                                                {item}
                                            </div>
                                        );
                                    })}
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