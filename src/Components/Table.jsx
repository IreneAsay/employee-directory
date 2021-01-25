import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table className="table table-striped ">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Location</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, i) => (
                        <tr className="table-primary" key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>
                                <img src={user.picture.thumbnail} alt={user.name.first + ' ' + user.name.last} />
                            </td>
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