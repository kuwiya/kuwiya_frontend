import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../../components/ui";
import ArrowLeft from "../../../ArrowLeft";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
    return currentPage;
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage((prev) => prev + 1);
    }
    return currentPage;
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={prevPage}
        className="w-[30px] h-[30px] flex justify-center items-center bg-darkyellow rounded"
      >
        {<ArrowLeft width={14} />}
      </button>

      <button
        onClick={nextPage}
        className="rotate-180 w-[30px] h-[30px] flex justify-center items-center bg-darkyellow rounded"
      >
        {<ArrowLeft width={14} />}
      </button>
    </div>
  );
};

export default Pagination;
