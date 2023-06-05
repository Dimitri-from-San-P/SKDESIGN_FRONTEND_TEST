import React from 'react';
import './DataSelectButtons.css';

function DataSelectButtons({ buttonHandler }: any): JSX.Element {
  const smallData =
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const largeData =
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  return (
    <div className="selectButtonDiv">
      <button type="button" className="button-89" onClick={() => buttonHandler(smallData)}>
        Маленький список
      </button>
      <button type="button" className="button-89" onClick={() => buttonHandler(largeData)}>
        Большой список
      </button>
    </div>
  );
}

export default DataSelectButtons;
