import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadJobs, searchJobs } from "../redux/actions/jobActions";

function SearchBox() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    search ? dispatch(searchJobs(search)) : dispatch(loadJobs());
  }, [search, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-3 w-75 m-auto">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Job name/title"
          aria-label="Search"
          onBlur={(e) => setSearch(e.target.value)}
        />

        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
