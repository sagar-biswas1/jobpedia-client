import axios from "axios";
import React, { useState } from "react";
import LeftSidebar from "../../../components/adminPanelComponents/LeftSideBar";

function PostJob() {
  const [message, setMessage] = useState("");

  const [jobData, setJobData] = useState({
    email: "",
    jobType: "",
    jobTitle: "",
    location: "",
    details: "",
    salary: "",
    datePosted: `${new Date().toDateString(
      "dd/mm"
    )} , ${new Date().toLocaleTimeString()}`,
  });

  const handleInputChange = (e) => {
    const newData = { ...jobData };
    newData[e.target.name] = e.target.value;
    setJobData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(jobData);

    axios
      .post("https://afternoon-shelf-00792.herokuapp.com/post-job", {
        ...jobData,
      })
      .then(function (response) {
        console.log(response);
        setMessage(response.data.message);
        setTimeout(() => {
          setMessage("");
        }, 10000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="d-flex">
      <LeftSidebar />
      <div className="m-3 w-100 ">
        {message && <p className="p-3 text-center bg-success">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label
              for="exampleFormControlInput1"
              className="col-sm-3 col-form-label"
            >
              Email address
            </label>
            <div className="col-sm-9">
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
                onBlur={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              for="formControlInputText1"
              className="col-sm-3 col-form-label"
            >
              Job Title
            </label>{" "}
            <div className="col-sm-9">
              <input
                name="jobTitle"
                type="Text"
                className="form-control"
                id="formControlInputText1"
                placeholder="Job title"
                required
                onBlur={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="locationInput" className="col-sm-3 col-form-label">
              Location
            </label>
            <div className="col-sm-9">
              <input
                name="location"
                type="Text"
                className="form-control"
                id="locationInput"
                placeholder="Enter job location"
                required
                onBlur={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          {/*  */}

          <div className="mb-3 row">
            <label for="selectInput" className="col-sm-3 col-form-label">
              Select a job type
            </label>
            <div className="col-sm-9">
              <select
                name="jobType"
                className="form-select m-2"
                style={{ flex: 2 }}
                required
                id="selectInput"
                onBlur={(e) => handleInputChange(e)}
              >
                <option value="">None</option>
                <option value="full-time">Full time</option>
                <option value="remote">Remote</option>
                <option value="intern">Internship</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label
              for="exampleFormControlTextarea1"
              className="col-sm-3 col-form-label"
            >
              Job details
            </label>
            <div className="col-sm-9">
              <textarea
                name="details"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
                onBlur={(e) => handleInputChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputSelary" className="col-sm-3 col-form-label">
              Approximate Salary
            </label>
            <div className="col-sm-9">
              <input
                name="salary"
                type="number"
                className="form-control"
                id="inputSelary"
                required
                onBlur={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <input className="btn btn-primary w-100" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default PostJob;
