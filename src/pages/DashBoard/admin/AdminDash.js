import axios from "axios";
import React, { useEffect, useState } from "react";

import LeftSidebar from "../../../components/adminPanelComponents/LeftSideBar";

function AdminDash() {
  const [allJobs, setAllJobs] = useState([]);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/all-job-posted`)
      .then(function (response) {
        setAllJobs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isReload]);

  const [message, setMessage] = useState("");
  const changePostStatus = (status, _id) => {
    axios
      .patch(`https://afternoon-shelf-00792.herokuapp.com/update-job-status/${_id}`, {
        status,
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
    <div className="d-flex">
      <LeftSidebar />

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
              {allJobs.map((j) => (
                <tr key={j._id}>
                  {" "}
                  <td>{j.datePosted}</td>
                  <td>{j.jobTitle}</td>
                  <td>{j.email}</td>
                  <td>{j.location}</td>
                  <td>{j.jobType}</td>
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
                        {j.status}
                      </button>
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li
                          className="mx-1 border-bottom p-2"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changePostStatus("approved", j._id)}
                        >
                          Approve Post
                        </li>

                        <li
                          className="mx-1 border-bottom p-2"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => changePostStatus("pending", j._id)}
                        >
                          Pending
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default AdminDash;
