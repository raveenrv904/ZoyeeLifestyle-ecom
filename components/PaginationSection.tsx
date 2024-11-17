import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationSection = ({
  currentPage,
  setCurrentPage,
  totalPossiblePage,
}: {
  currentPage: number;
  totalPossiblePage: number;
  setCurrentPage: (count: number) => void;
}) => {
  const nextPage = () => {
    console.log(totalPossiblePage);
    if (totalPossiblePage > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full my-12">
      <Pagination>
        <PaginationContent>
          <PaginationItem
            className="cursor-pointer bg-primary text-white rounded-md"
            onClick={previousPage}
          >
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>

          <PaginationItem
            onClick={nextPage}
            className="bg-primary cursor-pointer  text-white rounded-md"
          >
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationSection;
