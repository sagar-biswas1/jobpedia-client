import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../pages/login/loginMethods";
import { removeUser } from "../redux/actions/userLogin";

function Navbar() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userInfo);

  const [displayAdminNav, setDisplayAdminNav] = useState(false);
  useEffect(() => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/is-admin/${userData.email}`)
      .then(function (response) {
        setDisplayAdminNav(response.data.isAdmin);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userData]);

  const handleLogOut = () => {
    logOut();
    dispatch(removeUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          JOBPEDIA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {displayAdminNav && (
              <li className="nav-item">
                <Link className="nav-link " to="/admin-dashboard/job-list">
                  Dashboard
                </Link>
              </li>
            )}

            {userData.role === "employer" && (
              <li className="nav-item">
                <Link className="nav-link " to="/employer-dashboard/post-job">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {userData.email ? (
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <span className="nav-link" onClick={handleLogOut}>
                  log-out
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link " to="/login">
                  login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
