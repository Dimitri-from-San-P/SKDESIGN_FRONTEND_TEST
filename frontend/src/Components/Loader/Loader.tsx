import React from 'react';
import './Loader.css';

function Loader(): JSX.Element {
  return (
    <div className="containerLoader">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
