import React, { Component } from 'react';
import NavBar from './NavBar'
import { getUsers } from '../utils/API'
import Table from './Table'
import { isDOMComponentElement } from 'react-dom/test-utils';

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
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // Logic to filter users by state
            console.log(item)
            return item.name.first === filter;
        });
        this.setState({ users: filteredList });
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