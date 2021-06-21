import React from "react";

function EmployerList({ employerList }) {


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Cell no</th>
          </tr>
        </thead>
        <tbody>
          {employerList.map((e) => (
            <tr key={e._id}>
              <th scope="row">{e?.name}</th>
              <td>{e?.email}</td>
              <td>{e?.mobileNumber}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployerList;
