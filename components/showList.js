import React from 'react';
import axios from 'axios';
import {apiServer} from '../config';
const ethers = require('ethers');
import app from '../ethereum/connection/app';
export default class ShowList extends React.Component {

    componentDidMount() {
        console.log("===========", this.props.list);
        app.dOrgan.on("donorDead",(author, oldValue, newValue, event) =>{
            axios.post(`${apiServer}/api/users/algorithm`, {
                data: this.props.list,
                donor: newValue
            })
                .then(response => {
                    console.log('----------------', response.data);
                });
        });
    }

    render() {
        return (
            <div>The beginning</div>
        )
    }
}