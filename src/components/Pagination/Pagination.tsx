import * as React from "react";
import Button from "src/common/Button/Button";
import Icon from "src/common/Icon/Icon";
import { usePagination } from "../../hooks/usePagination";
import "./Pagination.scss";

type PaginationProps = {
  pages: number;
  currentPage: number;
  handleClick: (page: number) => void;
};

const siblingCount = 1;

export default function Pagination({
  pages,
  currentPage,
  handleClick,
}: PaginationProps) {
  const paginationRange = usePagination({
    pages,
    siblingCount,
    currentPage,
  })!;

  return (
    <div className="pagination">
      <Button
        onClick={() => handleClick(currentPage - 1)}
        isDisabled={currentPage <= 1}
        id={0}
      >
        <Icon icon="pagArrow" />
      </Button>
      {pages &&
        paginationRange &&
        paginationRange.map((pageNumber: number, index: number) =>
          pageNumber === 0 ? (
            <p key={index}>...</p>
          ) : (
            <Button
              key={index}
              activePage={currentPage}
              id={pageNumber}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </Button>
          )
        )}
      <Button
        onClick={() => handleClick(currentPage + 1)}
        isDisabled={currentPage >= pages}
        id={paginationRange[paginationRange.length + 1] as number}
      >
        <Icon icon="pagArrow" className="rotate" />
      </Button>
    </div>
  );
}
