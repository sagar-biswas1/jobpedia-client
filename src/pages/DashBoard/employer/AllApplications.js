import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../../components/adminPanelComponents/LeftSideBar";

function AllApplications() {
  const userData = useSelector((state) => state.userData.userInfo);
  const [allApplications, setAllApplications] = useState([]);
  useEffect(() => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/applied-jobs/${userData.email}`, {})
      .then(function (response) {
        setAllApplications(response.data);
      })
      .catch(function (error) {
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
                <th scope="col">Applicant Name</th>
                <th scope="col">Email</th>
                <th scope="col">CV URL</th>
                <th scope="col">applicantMobileNo</th>
              </tr>
            </thead>
            <tbody>
              {allApplications.map((a) => (
                <tr key={a._id}>
                  <th scope="row">{a?.applicantName}</th>
                  <td>{a?.applicantEmail}</td>
                  <td>{a?.applicantCvLink}</td>
                  <td>{a?.applicantMobileNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllApplications;
