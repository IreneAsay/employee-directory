import React, { Component } from 'react';
import NavBar from './NavBar'
import { getUsers } from '../utils/API'

class Main extends Component {
    onChange = e => {
        getUsers(function (res) {
            console.log(res)
        })
    }
    render() {
        return (
            <>
                <NavBar onChange={this.onChange} />
            </>
        );
    }
}

export default Main;