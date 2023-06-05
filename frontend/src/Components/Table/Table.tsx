import React, { useState } from 'react';
import { SmallData } from '../../App/types';
import './Table.css';
import IconDownArrow from '../Arrows/IconDownArrow';
import IconUpArrow from '../Arrows/IconUpArrow';
import Search from '../../Search/Search';
import AddClientButton from '../../AddClientButton/AddClientButton';

export default function Table({
  // clientList,
  currentPageBlock,
  sortedField,
  directionSort,
  rowInfo,
  searchFunction,
  addClient,
  maxIdNum,
}: {
  // clientList: SmallData[];
  currentPageBlock: SmallData[];
  sortedField: any;
  directionSort: boolean;
  rowInfo: any;
  searchFunction: any;
  addClient: (client: SmallData) => void;
  maxIdNum: number;
}): JSX.Element {
  const [arrowPosition, setArrowPosition] = useState('');

  // function Arrow(): JSX.Element {
  //   return <div>{directionSort ? <IconDownArrow /> : <IconUpArrow />}</div>;
  // }

  const arrowSortPosition = (field: keyof SmallData): void => {
    sortedField(field);
    setArrowPosition(field);
  };

  //   const rowInfo = (info:any):void => {
  // console.log(info)
  //   }

  return (
    <div className="mainContainer">
      <AddClientButton addClient={addClient} maxIdNum={maxIdNum} />
      <Search searchFunction={searchFunction} />
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => arrowSortPosition('id')}>
                ID
                {arrowPosition === 'id' ? (
                  directionSort ? (
                    <IconDownArrow />
                  ) : (
                    <IconUpArrow />
                  )
                ) : null}
              </th>
              <th onClick={() => arrowSortPosition('firstName')}>
                First Name
                {arrowPosition === 'firstName' ? (
                  directionSort ? (
                    <IconDownArrow />
                  ) : (
                    <IconUpArrow />
                  )
                ) : null}
              </th>
              <th onClick={() => arrowSortPosition('lastName')}>
                Last Name
                {arrowPosition === 'lastName' ? (
                  directionSort ? (
                    <IconDownArrow />
                  ) : (
                    <IconUpArrow />
                  )
                ) : null}
              </th>
              <th onClick={() => arrowSortPosition('email')}>
                Email
                {arrowPosition === 'email' ? (
                  directionSort ? (
                    <IconDownArrow />
                  ) : (
                    <IconUpArrow />
                  )
                ) : null}
              </th>
              <th onClick={() => arrowSortPosition('phone')}>
                Phone
                {arrowPosition === 'phone' ? (
                  directionSort ? (
                    <IconDownArrow />
                  ) : (
                    <IconUpArrow />
                  )
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {clientList.map((el): any => (
            <tr key={el.email} onClick={() => rowInfo(el)}> */}
            {currentPageBlock.map((el): any => (
              <tr key={el.email} onClick={() => rowInfo(el)}>
                <td>{el.id}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
