import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUser } from "../../redux/actions/userLogin";
import { googleSignIn } from "./loginMethods";

function Login() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      axios
        .get(`https://afternoon-shelf-00792.herokuapp.com/is-employer/${res.email}`)
        .then(function (response) {
          dispatch(setUser({ ...res, role: response?.data?.role }));
          history.replace(from);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  return (
    <div className="login-ui">
      <div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            Login Using google account
          </button>
          <p className="text-center">or</p>
          <div className="text-center mt-4">
            Don't have an account?
            <span>
              <Link to="/user-signup"> Create an account</Link>
            </span>
          </div>
          <p className="text-center">or</p>
          <b className="text-center">
            Want to post a job? <br />
            <Link to="/pricing">Sign up as an employer.</Link>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Login;
