import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadJobs } from "../../redux/actions/jobActions";
import Pagination from "./Pagination";

function AllJobs() {
  const allJobs = useSelector((state) => state.jobs.allJobs);
  //new code for pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  const indexofLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexofLastPost - postPerPage;
  const currentPosts = allJobs.slice(indexOfFirstPost, indexofLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //end

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJobs());
  }, [dispatch]);

  return (
    <div>
      <p className="p-1">About {allJobs.length} results...</p>

      {currentPosts.map((j) => (
        <JobCard data={j} key={j._id} />
      ))}
      <div className="mt-3 mb-3">
        <Pagination
          paginate={paginate}
          postPerPage={postPerPage}
          totalPosts={allJobs.length}
        />
      </div>
    </div>
  );
}

const JobCard = ({ data }) => {
  const { jobType, jobTitle, location, datePosted, _id, salary } = data;

  return (
    <div className="card">
      <div className="card-header bg-info fw-bold text-center">{jobType}</div>
      <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{location}</p>
        <p>{salary}</p>
        <p>{datePosted}</p>
        <Link to={`/job/${_id}`} className="btn btn-primary">
          See details
        </Link>
      </div>
    </div>
  );
};

export default AllJobs;
