import React from 'react';
import axios from 'axios';
import {apiServer} from '../config';

export default class ShowList extends React.Component {

    componentDidMount() {
        console.log("===========", this.props.list);
        axios.post(`${apiServer}/api/users/algorithm`, {
            data: this.props.list
        })
        .then(response => {
            console.log('----------------', response.data);
        });
    }

    render() {
        return (
            <div>The beginning</div>
        )
    }
}