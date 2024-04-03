import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav>
      <ul className="flex gap-6">
        {pageNumbers.map((pgNumber) => (
          <Link
            to={`?page=${pgNumber}`}
            onClick={() => setCurrentPage(pgNumber)}
            key={pgNumber}
            className={`px-6 border rounded-md transition-all ease-out  py-4 font-lato  ${
              currentPage == pgNumber
                ? "border-none bg-darkyellow text-primary"
                : "hover:bg-darkyellow hover:border-[#ffffff] hover:text-primary bg-transparent text-[#828282] border-[#828282]"
            } `}
          >
            <li className="page-link">{pgNumber}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
