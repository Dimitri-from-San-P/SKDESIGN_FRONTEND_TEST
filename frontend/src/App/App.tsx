import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonAppBar from '../Components/Header/Header';
import { SmallData } from './types';
import useDataServer from '../Hooks/useDataServer';
import DataSelectButtons from '../Components/DataSelectButtons/DataSelectButtons';
import MainTable from '../Components/MainTable/MainTable';
import Loader from '../Components/Loader/Loader';

function App(): JSX.Element {
  // useEffect(() => {
  //   fetch(
  //     'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  //     {
  //       method: 'GET',
  //       headers: { 'content-type': 'application/json' },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setClientList(data));
  //   setIsLoading(false);
  // }, []);

  // const [isLoading, setIsLoading] = useState(true);
  // const [clientList, setClientList] = useState<SmallData[]>([]);

  // const url =
  //   'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  const [selectButton, setSelectButton] = useState(false);
  const [directionSort, setDirectionSort] = useState(true);
  const [personDetail, setPersonDetail] = useState({});
  const [url, setUrl] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [{ clientList, setClientList, isLoading, isLoaded }] = useDataServer({
    url,
    selectButton,
  });
  const maxRowsPerPage = 50;
  const [totalRowsInPage, setTotalRowsInPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageActive, setCurrentPageActive] = useState('ordinary');

  const [searchText, setSearchText] = useState('');
  const [newClient, setNewClient] = useState<SmallData | null>(null);

  const getFilteredData = (): SmallData[] => {
    if (!searchText) {
      return clientList;
    }
    return clientList.filter(
      (el: SmallData) =>
        el.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        el.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        el.email.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredData = getFilteredData();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    // clientList.length заменяем на filteredData.length
    setTotalRowsInPage(filteredData.length);
    const maxPage = Math.ceil(totalRowsInPage / maxRowsPerPage);
    setPageCount(maxPage);
    getCurrentPage(currentPage);
  }, [filteredData.length, isLoaded, totalRowsInPage, currentPage]);

  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  const getCurrentPage = (pageCur: any): void => {
    setCurrentPage(pageCur);
    setCurrentPageActive('active');
  };
  // const getNewRowArr = (): any => {
  //   if (currentPage !== null) {
  //     const lastRowInPage = currentPage * maxRowsPerPage;
  //     const firstRowInPage = lastRowInPage - maxRowsPerPage + 1;
  //     const currentPageBlockArr = clientList.slice(firstRowInPage, lastRowInPage);
  //     return currentPageBlockArr;
  //   }
  // };
  // const currentPageBlock = getNewRowArr();

  const lastRowInPage = currentPage * maxRowsPerPage;
  const firstRowInPage = lastRowInPage - maxRowsPerPage;
  // const currentPageBlock = clientList.slice(firstRowInPage, lastRowInPage);
  // Данные после фильтрации:
  const currentPageBlock = filteredData.slice(firstRowInPage, lastRowInPage);
  const checkCountPage = totalRowsInPage > maxRowsPerPage;

  const nextPageButton = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageButton = (): void => {
    setCurrentPage(currentPage - 1);
  };

  const buttonHandler = (getUrl: string): void => {
    setUrl(getUrl);
    setSelectButton(true);
  };

  // const sortedField = (field: keyof SmallData): void => {
  //   const copyData = [...clientList];

  //   let sortData;
  //   if (directionSort) {
  //     sortData = copyData.sort((a, b): any => (a[field] > b[field] ? 1 : -1));
  //   }
  //   sortData = copyData.reverse();

  //   setClientList(sortData);
  //   setDirectionSort(!directionSort);
  // };

  const sortedField = (field: keyof SmallData): void => {
    const copyData = [...clientList];

    const sortData = copyData.sort((a, b) => {
      if (a[field] > b[field]) {
        return directionSort ? 1 : -1;
      }
      if (a[field] < b[field]) {
        return directionSort ? -1 : 1;
      }
      return 0;
    });

    setClientList(sortData);
    setDirectionSort(!directionSort);
  };

  const rowInfo = (info: SmallData): void => {
    setPersonDetail(info);
    setShowInfo(true);
  };

  const searchFunction = (text: string): void => {
    setSearchText(text);
  };

  const addClient = (client: SmallData): void => {
    setNewClient(client);
  };

  if (newClient !== null) {
    currentPageBlock.unshift(newClient);
  }

  const getMaxId = (): any => {
    const copyArr = [...filteredData];
    copyArr.sort((a, b) => a.id - b.id);
    const maxNum = copyArr[copyArr.length - 1];
    if (maxNum) {
      return maxNum.id;
    }
  };
  const maxIdNum = getMaxId();

  return (
    <div className="App">
      <ButtonAppBar />
      <h3>Пожалуйста, выберите тип загружаемых данных.</h3>
      <h4>
        Маленький список, выводит таблицу из 32 клиентов, большой список выводит таблицу из 1000
        клиентов.
      </h4>
      <DataSelectButtons buttonHandler={buttonHandler} />
      {isLoading ? (
        <Loader />
      ) : (
        <MainTable
          // clientList={clientList} меняем на нижестоящее значение
          currentPageBlock={currentPageBlock}
          sortedField={sortedField}
          directionSort={directionSort}
          rowInfo={rowInfo}
          personDetail={personDetail}
          showInfo={showInfo}
          pages={pages}
          getCurrentPage={getCurrentPage}
          nextPageButton={nextPageButton}
          prevPageButton={prevPageButton}
          currentPage={currentPage}
          pageCount={pageCount}
          currentPageActive={currentPageActive}
          isLoaded={isLoaded}
          checkCountPage={checkCountPage}
          searchFunction={searchFunction}
          addClient={addClient}
          maxIdNum={maxIdNum}
          setShowInfo={setShowInfo}
        />
      )}
    </div>
  );
}

export default App;
