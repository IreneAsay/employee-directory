import React, { Component } from 'react';
import NavBar from './NavBar'
import { getUsers } from '../utils/API'
import Table from './Table'

class Main extends Component {

    state = {
        users: []
    }
    componentDidMount() {
        getUsers().then((res) => {
            console.log(res.data.results)
            this.setState({ users: res.data.results })
        })
    }

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // Logic to filter users
        });
        this.setState({ filteredUsers: filteredList });
    }



    render() {
        return (
            <>
                <NavBar handleSearchChange={this.handleSearchChange} />
                <Table users={this.state.users} />
            </>
        );
    }
}

export default Main;