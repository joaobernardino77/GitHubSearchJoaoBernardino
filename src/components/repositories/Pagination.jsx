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
            onClick={() => paginate(--currentPage)}
            className="arrow arrow-left"
          />
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? "page-item-selected" : ""
            }`}
          >
            <div onClick={() => paginate(number)} className="page-link">
              {number}
            </div>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li
            onClick={() => paginate(++currentPage)}
            className="arrow arrow-right"
          />
        )}
      </ul>
    </div>
  );
};

export default Pagination;
