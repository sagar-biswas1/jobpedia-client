import React from "react";

function JobApplyPage() {
  return (
    <form className="row g-3 p-4">
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Email *
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          required
        />
      </div>
      <div className="col-md-6">
        <label for="inputName" className="form-label">
          Full name *
        </label>
        <input type="text" className="form-control" id="inputName" required />
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Address *
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          required
        />
      </div>
      <div className="col-12">
        <label for="inputAddress2" className="form-label">
          Address 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          City *
        </label>
        <input type="text" className="form-control" id="inputCity" required />
      </div>

      <div className="col-md-2">
        <label for="inputMobileNumber" className="form-label">
          Mobile no. *
        </label>
        <input
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
        <input type="text" className="form-control" id="inputCVLink" required />
      </div>
      <div className="mb-3">
        <label for="coverLetterInput" className="form-label">
          Cover letter *
        </label>
        <textarea
          className="form-control"
          id="coverLetterInput"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="col-12">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default JobApplyPage;
