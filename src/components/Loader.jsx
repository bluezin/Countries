import React from 'react';
import '../styles/components/Loader.css';

function Loader() {
  return (
    <div className="center-loader">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
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
