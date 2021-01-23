import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, i) => (
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Table;