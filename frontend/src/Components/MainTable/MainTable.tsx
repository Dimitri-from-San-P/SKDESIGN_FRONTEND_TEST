import React from 'react';
import Table from '../Table/Table';
import PersonInfo from '../PersonInfo/PersonInfo';
import { SmallData } from '../../App/types';
import Pagination from '../Pagination/Pagination';

function MainTable({
  // clientList,
  currentPageBlock,
  sortedField,
  directionSort,
  rowInfo,
  personDetail,
  showInfo,
  pages,
  getCurrentPage,
  nextPageButton,
  prevPageButton,
  currentPage,
  pageCount,
  currentPageActive,
  isLoaded,
  checkCountPage,
  searchFunction,
  addClient,
  maxIdNum,
  setShowInfo,
}: {
  // clientList: SmallData[];
  currentPageBlock: SmallData[];
  sortedField: any;
  directionSort: boolean;
  rowInfo: any;
  personDetail: any;
  showInfo: boolean;
  pages: number[];
  getCurrentPage: any;
  nextPageButton: any;
  prevPageButton: any;
  currentPage: number;
  pageCount: number;
  currentPageActive: string;
  isLoaded: boolean;
  checkCountPage: boolean;
  searchFunction: any;
  addClient: (client: SmallData) => void;
  maxIdNum: number;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div>
      {isLoaded && (
        <Table
          // clientList={clientList}
          currentPageBlock={currentPageBlock}
          sortedField={sortedField}
          directionSort={directionSort}
          rowInfo={rowInfo}
          searchFunction={searchFunction}
          addClient={addClient}
          maxIdNum={maxIdNum}
        />
      )}
      {showInfo ? <PersonInfo personDetail={personDetail} setShowInfo={setShowInfo} /> : null}
      {isLoaded && checkCountPage && (
        <Pagination
          pages={pages}
          getCurrentPage={getCurrentPage}
          nextPageButton={nextPageButton}
          prevPageButton={prevPageButton}
          currentPage={currentPage}
          pageCount={pageCount}
          currentPageActive={currentPageActive}
        />
      )}
    </div>
  );
}

export default MainTable;
