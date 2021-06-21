import axios from "axios";
import React, { useState } from "react";

function JobList({ data, setIsReload, isReload }) {
  const { _id, jobType, jobTitle, location, email, datePosted, status } = data;
  const [message, setMessage] = useState("");
  const changePostStatus = (e) => {
    console.log(e.target.innerText, _id);

    axios
      .patch(`https://afternoon-shelf-00792.herokuapp.com/update-job-status/${_id}`, {
        status: e.target.innerText,
      })
      .then(function (response) {
        console.log(response);
        setMessage(response.data.message);
        setIsReload(!isReload);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="p-4"
      style={{ background: "aliceblue", width: "-webkit-fill-available" }}
    >
      {message && <p>{message}</p>}

      <div className="table-responsive">
        <table className="table table-info table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">
                <i className="bi bi-layers-half"></i> Date
              </th>
              <th scope="col">
                <i className="bi bi-file-earmark-person-fill"></i>Job Title
              </th>
              <th scope="col">
                <i className="bi bi-envelope-fill"></i> Posted By
              </th>
              <th scope="col">
                <i className="bi bi-envelope-fill"></i> Location
              </th>
              <th scope="col">
                <i className="bi bi-credit-card-2-front-fill"></i> Type
              </th>
              <th scope="col">
                <i className="bi bi-layers-half"></i> Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {" "}
              <td>{datePosted}</td>
              <td>{jobTitle}</td>
              <td>{email}</td>
              <td>{location}</td>
              <td>{jobType}</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle p-2 "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    {status}
                  </button>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      className="mx-1 border-bottom p-2"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => changePostStatus(e)}
                    >
                      Accept Post
                    </li>

                    <li
                      className="mx-1 border-bottom p-2"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => changePostStatus(e)}
                    >
                      pending
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobList;
