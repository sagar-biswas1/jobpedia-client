import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterJobs, showAllTypes } from "../redux/actions/jobActions";

function FilterOptions() {
  const [filterParams, setFilterParams] = useState({
    jobType: "",
  });

  useEffect(() => {
    if (filterParams.jobType !== "all-jobs") {
      dispatch(filterJobs(filterParams));
    } else {
      dispatch(showAllTypes());

      setFilterParams({ ...filterParams, jobType: "" });
    }
  }, [filterParams]);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setFilterParams((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <div className="text-center mt-2 mb-2 fw-bold">Filter jobs</div>

      <form
        action="
    "
        className="d-flex flex-column flex-sm-row justify-content-between m-auto"
        style={{ width: "fit-content" }}
      >
        <select
          name="jobType"
          className="form-select m-2"
          aria-label="Default select example"
          onChange={(e) => handleInputChange(e)}
          style={{ flex: 2 }}
        >
          <option value="all-jobs">Job types all</option>
          <option value="full-time">Full time</option>
          <option value="remote">Remote</option>
          <option value="intern">Internship</option>
        </select>
      </form>
    </div>
  );
}

export default FilterOptions;
