import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../../components/ui";
import ArrowLeft from "../../../ArrowLeft";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

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
    <div className="flex gap-3 md:gap-6">
      <Button
        children={<ArrowLeft width={screen.width < 768 && 18} />}
        onClick={prevPage}
        padding={screen.width < 768 ? "0px 5px" : "5px 10px"}
      />
      <Button
        className="rotate-180"
        children={<ArrowLeft width={screen.width < 768 && 18} />}
        onClick={nextPage}
        padding={screen.width < 768 ? "0px 5px" : "5px 10px"}
      />
    </div>
  );
};

export default Pagination;
