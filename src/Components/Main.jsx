import React, { Component } from "react";
import NavBar from "./NavBar";
import { getUsers } from "../utils/API";
import Table from "./Table";
import { isDOMComponentElement } from "react-dom/test-utils";

class Main extends Component {
    state = {
        users: [],
        filterUsers: [],
        inputValue: ""
    };
    componentDidMount() {
        getUsers().then((res) => {
            // console.log(res.data.results);
            this.setState({ ...this.state, users: res.data.results });
            this.setState({ ...this.state, filterUsers: res.data.results });
        });
    }

    // <onClick= {sortLocation}></onClick>

    // const sortLocation = () => {
    //     const compare = (a, b) = > {
    //         return a.
    //     }

    handleSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ ...this.state, inputValue: event.target.value });
        const filter = event.target.value;
        const filteredList = this.state.users.filter((item) => {

            let values =
                item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            console.log(filter, values);
            if (values.indexOf(filter.toLowerCase()) !== -1) {
                return item;
            }
        });
        this.setState({ ...this.state, filterUsers: filteredList });
    };

    render() {
        return (
            <>
                <NavBar handleSearchChange={this.handleSearchChange} />
                <Table users={this.state.filterUsers} />
            </>
        );
    }
}

export default Main;
