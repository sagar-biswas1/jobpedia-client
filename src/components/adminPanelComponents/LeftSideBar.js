import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";
const LeftSidebar = () => {
  const [displayAdminTabs, setDisplayAdminTabs] = useState(false);
  const userData = useSelector((state) => state.userData.userInfo);
  useEffect(() => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/is-admin/${userData.email}`)
      .then(function (response) {
        setDisplayAdminTabs(response.data.isAdmin);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userData]);

  return (
    <div style={{ width: "fit-content" }} className="bg-info p-3">
      <hr />
      {/* admin */}
      {displayAdminTabs ? (
        <div>
          <div className="sidebar-item">
            <Link
              to="/admin-dashboard/job-list"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-basket-fill"></i> Job List
            </Link>
          </div>
          <hr />
          <div className="sidebar-item">
            <Link
              to="/admin-dashboard/all-employers"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-node-plus-fill"></i> Employer List
            </Link>
          </div>
          <hr />
        </div>
      ) : (
        <div>
          <div className="sidebar-item">
            <Link
              to="/employer-dashboard/post-job"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-cart-plus-fill"></i> Post a job
            </Link>
          </div>
          <hr />
          <div className="sidebar-item">
            <Link
              to="/employer-dashboard/all-applications"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-basket-fill"></i> Applications
            </Link>
          </div>
          <hr />
          <div className="sidebar-item">
            <Link
              to="/employer-dashboard/manage-jobs"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-chat-left-text-fill"></i> Manage Jobs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
