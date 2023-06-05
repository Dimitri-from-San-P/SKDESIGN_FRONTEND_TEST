import React from 'react';
import './Pagination.css';

function Pagination({
  pages,
  getCurrentPage,
  nextPageButton,
  prevPageButton,
  currentPage,
  pageCount,
  currentPageActive,
}: {
  pages: number[];
  getCurrentPage: any;
  nextPageButton: any;
  prevPageButton: any;
  currentPage: number;
  pageCount: number;
  currentPageActive: string;
}): JSX.Element {
  return (
    <div className="pagination">
      {/* <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a className="active" href="#">
        2
      </a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a> */}

      {currentPage !== 1 && (
        <a href="#" onClick={() => prevPageButton()}>
          &laquo;
        </a>
      )}
      {pages.map((page): any => (
        <a
          key={page}
          href="#"
          onClick={() => getCurrentPage(page)}
          className={currentPage === page ? `${currentPageActive}` : 'ordinary'}
        >
          {page}
        </a>
      ))}
      {currentPage !== pageCount && (
        <a href="#" onClick={() => nextPageButton()}>
          &raquo;
        </a>
      )}
    </div>
  );
}

export default Pagination;
