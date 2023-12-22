import { useMemo } from "react";

type UsePaginationProps = {
  pages: number;
  siblingCount: number;
  currentPage: number;
};

export const usePagination = ({
  pages,
  siblingCount = 1,
  currentPage,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    const range = (start: number, end: number) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= pages) {
      return range(1, pages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, pages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pages;

    const DOTS = 0;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 2 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, pages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 2 + 2 * siblingCount;
      let rightRange = range(pages - rightItemCount + 1, pages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
    return;
  }, [pages, siblingCount, currentPage]);

  return paginationRange;
};
