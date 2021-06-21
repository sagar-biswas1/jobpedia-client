import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../../components/adminPanelComponents/LeftSideBar";

function ManageJobs() {
  const userData = useSelector((state) => state.userData.userInfo);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/job-posted/${userData.email}`)
      .then(function (response) {
        // handle success
        setAllJobs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [userData]);

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Posted-date</th>
                <th scope="col">Title</th>
                <th scope="col">Job type</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allJobs.map((j) => (
                <tr key={j._id}>
                  <th scope="row">{j?.datePosted}</th>
                  <td>{j?.jobTitle}</td>
                  <td>{j?.jobType}</td>
                  <td>{j.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageJobs;
