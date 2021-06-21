import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function JobApplyPage() {
  let { id } = useParams();
  const allJobs = useSelector((state) => state.jobs.allJobs);
const [message,setMessage]=useState("");
  const [jobDetails, setJobDetails] = useState({});
const [application, setApplication] = useState({
  applicantEmail: "",
  applicantName:'',
  applicantAddress:"",
  applicantCity:"",
  applicantMobileNo:"",
  applicantCvLink:"",
  applicantCoverLetter:"",
});


  useEffect(() => {
    const newJobDetails = allJobs.find((j) => j._id === id);

    setJobDetails(newJobDetails);
  }, [id, allJobs]);

 

const handleInputChange = (e) => {
  const newApplicationDetails = { ...application };
  newApplicationDetails[e.target.name] = e.target.value;
  setApplication(newApplicationDetails);
};

const handleApplicationSubmit=(e)=>{
    e.preventDefault();

 axios
   .post("https://afternoon-shelf-00792.herokuapp.com/apply-job", {
     ...application,
     jobPostedBy: jobDetails.email,
   })
   .then(function (response) {
       setMessage(response?.data?.message);
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });



}

  return (
    <>
      {message && <p className="p-3 text-center bg-success">{message}</p>}
      <form className="row g-3 p-4" onSubmit={handleApplicationSubmit}>
        

        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email *
          </label>
          <input
            name="applicantEmail"
            type="email"
            className="form-control"
            id="inputEmail4"
            required
            onBlur={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Full name *
          </label>
          <input
            onBlur={handleInputChange}
            name="applicantName"
            type="text"
            className="form-control"
            id="inputName"
            required
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address *
          </label>
          <input
            onBlur={handleInputChange}
            type="text"
            name="applicantAddress"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            required
          />
        </div>

        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City *
          </label>
          <input
            onBlur={handleInputChange}
            name="applicantCity"
            type="text"
            className="form-control"
            id="inputCity"
            required
          />
        </div>

        <div className="col-md-2">
          <label for="inputMobileNumber" className="form-label">
            Mobile no. *
          </label>
          <input
            name="applicantMobileNo"
            onBlur={handleInputChange}
            type="tel"
            className="form-control"
            id="inputMobileNumber"
            required
          />
        </div>
        <div className="col-md-12">
          <label for="inputCVLink" className="form-label">
            Drop your cv link *
          </label>
          <input
            onBlur={handleInputChange}
            name="applicantCvLink"
            type="text"
            className="form-control"
            id="inputCVLink"
            required
          />
        </div>
        <div className="mb-3">
          <label for="coverLetterInput" className="form-label">
            Cover letter *
          </label>
          <textarea
            onBlur={handleInputChange}
            className="form-control"
            id="coverLetterInput"
            rows="3"
            required
            name="applicantCoverLetter"
          ></textarea>
        </div>
        <div className="col-12">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </>
  );
}

export default JobApplyPage;
