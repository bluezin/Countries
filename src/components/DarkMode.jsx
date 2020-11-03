/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/DarkMode.css';

const DarkMode = ({ dark, setDark }) => {
  const name = dark ? 'Dark mode' : 'Light mode';
  const i = dark ? (
    <i className="fas fa-moon moom white" />
  ) : (
    <i className="far fa-moon moom" />
  );

  return (
    <div>
      {dark ? (
        <Helmet
          bodyAttributes={{ style: 'background-color : #273542; color: white' }}
        />
      ) : (
        <Helmet
          bodyAttributes={{ style: 'background-color : white; color: black' }}
        />
      )}
      <h6 onClick={() => setDark(!dark)} className="h6-dark">
        {i}
        {name}
      </h6>
    </div>
  );
};

export default DarkMode;
