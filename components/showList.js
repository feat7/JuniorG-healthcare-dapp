import React from 'react';
import axios from 'axios';
import {apiServer} from '../config';
const ethers = require('ethers');
import app from '../ethereum/connection/app';
export default class ShowList extends React.Component {

    componentDidMount() {
        app.getDeadDonors().then( r =>{
            axios.post(`${apiServer}/api/users/algorithm`, {
                data: this.props.list,
                donor: r[0]
            }).then(response => {
                    console.log(response.data);
            });
        });
    }

    render() {
        return (
            <div>The beginning</div>
        )
    }
}