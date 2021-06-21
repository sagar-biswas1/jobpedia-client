import React from "react";

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={() => paginate(number)}
              className="page-link"
              aria-label="Previous"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
