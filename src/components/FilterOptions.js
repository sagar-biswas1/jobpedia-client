import React from "react";
import { useState } from "react";

function FilterOptions() {
  const [price, setPrice] = useState(100);

  const selectedOptions = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="text-center mt-2 mb-2 ">Filter jobs</div>

      <form
        action="
    "
        class="d-flex flex-column flex-sm-row justify-content-between m-auto" style={{ width: "fit-content"}}
      >
        <select
          class="form-select m-2"
          aria-label="Default select example"
          onChange={(e) => selectedOptions(e)}
          style={{ flex: 2 }}
        >
          <option value="all">Job types all</option>
          <option value="1">Full time</option>
          <option value="2">Remote</option>
          <option value="3">Internship</option>
        </select>
        {/*  */}

        <select
          class="form-select m-2"
          aria-label="Default select example"
          onChange={(e) => selectedOptions(e)}
          style={{ flex: 2 }}
        >
          <option value="all">Posted any time</option>
          <option value="1">1 day ago</option>
          <option value="2">3 day ago</option>
          <option value="3">1 week ago</option>
        </select>
        <div>
          <div className="form-group m-1 w-100" style={{ flex: 1 }}>
            <label for="customRange3" class="form-label">
              Salary range 500
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="500"
              step="1"
              id="customRange3"
              onChange={(e) => selectedOptions(e)}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterOptions;
