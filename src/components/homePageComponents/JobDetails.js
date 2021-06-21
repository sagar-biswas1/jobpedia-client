import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { jobDetails } from "../../redux/actions/jobActions";

function JobDetails() {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => dispatch(jobDetails(id)), [dispatch, id]);

  const data = useSelector((state) => state.jobs.jobDetails);

  return (
    <>
      {!data ? (
        <p className="text-center bg-warning p-3 ">
          Click on <b>"See details" </b> button of a job to see the details.{" "}
        </p>
      ) : (
        <div className="bg-white">
          <button
            className="btn btn-primary"
            style={{
              position: "sticky",
              top: 0,

              width: "-webkit-fill-available",
              backgroundColor: "#2c3542",
            }}
            onClick={() => history.push(`/apply/${id}`)}
          >
            Apply now
          </button>
          <p>{data?.details}</p>
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              Job-title: {data?.jobTitle}
            </li>
            <li className="list-group-item">Type: {data?.jobType}</li>
            <li className="list-group-item">Location: {data?.location}</li>
            <li className="list-group-item">Date-posted: {data?.datePosted}</li>
            <li className="list-group-item">
              Approximate salary: {data?.salary}
            </li>
          </ul>
        </div>
      )}{" "}
    </>
  );
}

export default JobDetails;
