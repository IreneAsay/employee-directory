import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Location</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{user.location.state}</td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Table;