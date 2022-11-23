import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {currentPage > 1 && (
          <li
            data-testid="left-arrow"
            role="button"
            onClick={() => paginate(--currentPage)}
            className="arrow arrow-left"
          />
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-link ${
              currentPage === number ? "page-item-selected" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li
            data-testid="right-arrow"
            onClick={() => paginate(++currentPage)}
            className="arrow arrow-right"
          />
        )}
      </ul>
    </div>
  );
};

export default Pagination;
