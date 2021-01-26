import React from "react";

const Table = (props) => {
  return (
    <div>
      <table className="table table-striped ">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Photo</th>
            <th
              scope="col"
              onClick={() => {
                props.handleSortLocation();
              }}
            >
              Location <i className="far fa-caret-square-up"></i>
            </th>
            <th
              scope="col"
              onClick={() => {
                props.handleSortFirstName();
              }}
            >
              First Name <i class="far fa-caret-square-up"></i>
            </th>
            <th
              scope="col"
              onClick={() => {
                props.handleSortLastName();
              }}
            >
              Last Name <i class="far fa-caret-square-up"></i>
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, i) => (
            <tr className="table-primary" key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.first + " " + user.name.last}
                />
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
