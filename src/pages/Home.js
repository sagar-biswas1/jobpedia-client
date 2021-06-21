import React from "react";
import FilterOptions from "../components/FilterOptions";
import AllJobs from "../components/homePageComponents/AllJobs";
import JobDetails from "../components/homePageComponents/JobDetails";
import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <div>
      <SearchBox />
      <div className="bg-light">
        <FilterOptions />
        <div className="d-flex">
          <div
            className="m-1"
            style={{ flex: 1, height: "70vh", overflow: "scroll" }}
          >
            {" "}
            <AllJobs />
          </div>
          <div
            className="m-1"
            style={{ flex: 1.5, height: "60vh", overflow: "scroll" }}
          >
            <JobDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
