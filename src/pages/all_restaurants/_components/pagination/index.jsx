import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-6">
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`px-6 border transition-all ease-out  py-4 font-lato  ${
              currentPage == pgNumber
                ? "border-none bg-darkyellow text-primary"
                : "hover:bg-darkyellow hover:border-[#ffffff] hover:text-primary bg-transparent text-[#828282] border-[#828282]"
            } `}
          >
            <Link
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
