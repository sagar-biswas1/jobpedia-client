import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUser } from "../../redux/actions/userLogin";
import { googleSignIn } from "./loginMethods";

function GeneralUserSignup() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      axios
        .post("https://afternoon-shelf-00792.herokuapp.com/add-user", {
          email: res.email,
          role: "user",
        })
        .then(function (response) {
          if (response.data.user) {
            dispatch(setUser({ ...res, role: "user" }));
            history.replace(from);
          } else {
            console.log("message-", response.data.message);
            history.push("/login");
          }

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  return (
    <div className="login-ui">
      <div>
        <div className="m-auto border p-4" style={{ maxWidth: 500 }}>
          <form className="row g-3">
            <fieldset disabled>
              <legend style={{ fontSize: 12 }}>
                Login in with email and password feature is temporarily
                disabled. Please continue with google
              </legend>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Temporarily disabled"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Temporarily disabled"
                />
              </div>

              <div className="col-12 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                  </label>
                </div>
                <div className="text-primary"> Forgot Password?</div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Log in
                </button>
              </div>
            </fieldset>
          </form>
          <div className="text-center mt-4">
            Already have an account?
            <span>
              <Link to="/login"> Go to login</Link>
            </span>
          </div>
        </div>
        <br /> <p className="text-center">or</p> <br />
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>
            Signup Using google account
          </button>
          <br /> <p className="text-center">or</p> <br />
          <p className="text-center">
            Want to post a job? <br />
            <Link to="/pricing">Sign up as an employer.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralUserSignup;
