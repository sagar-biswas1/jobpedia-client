import React from 'react'
import FilterOptions from '../components/FilterOptions'
import AllJobs from '../components/homePageComponents/AllJobs'
import JobDetails from '../components/homePageComponents/JobDetails'
import SearchBox from '../components/SearchBox'

function Home() {
    return (
      <div>
        <SearchBox />
        <div class='bg-light'>
          <FilterOptions />
          <div class="d-flex">
            <div
              class="m-1"
              style={{ flex: 1, height: "60vh", overflow: "scroll" }}
            >
              {" "}
              <AllJobs />
            </div>
            <div
              class="m-1"
              style={{ flex: 1.5, height: "60vh", overflow: "scroll" }}
            >
              <JobDetails />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
