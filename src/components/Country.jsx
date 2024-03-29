/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/components/Country.css';

const Country = ({ name, population, region, capital, flags }) => {
  const estado = useSelector(state => state.booleano);
  const informacion = estado
    ? 'color-black informacion'
    : 'color-white informacion';
  //
  const history = useHistory();
  //
  function handleClick() {
    history.push(`/country/${name.common.toLowerCase()}`);
  }

  return (
    <div onClick={handleClick} className="country-list">
      <br />
      <img src={flags.png} alt="flag" className="img-bandera" />
      <div className={informacion}>
        <h1 className="Name-country">
          {name.common.length > 20 ? name.common.slice(1, 7) : name.common}
        </h1>
        <p className="p-country">
          Population:
          <span className="span">{population}</span>
        </p>
        <p className="p-country">
          Region:
          <span className="span">{region}</span>
        </p>
        <p className="p-country">
          Capital:
          <span className="span">
            {capital && capital.length > 0 && capital[0]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Country;
