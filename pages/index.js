import React, { Component } from 'react';
import app from '../ethereum/connection/app';

export default class Main extends Component {
    async componentDidMount() {
        await app.getAdmin().then(r => console.log(r));
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}