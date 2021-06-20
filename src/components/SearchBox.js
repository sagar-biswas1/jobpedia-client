import React from "react";

function SearchBox() {
  return (
    <div class='p-3'>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Job name/title"
          aria-label="Search"
        />
        <input
          class="form-control me-2"
          type="search"
          placeholder="Location"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
