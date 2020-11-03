/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import UnidadCountry from './UnidadCountry';
import Loader from './Loader';

const List = ({ match, history }) => {
  const estado = useSelector(state => state.booleano);

  const buttonDiv = estado ? 'color-black flag-div' : 'color-white flag-div';
  const button = estado ? 'w back' : 'b back';

  const [coun, setCoun] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
      .then(response => response.json())
      .then(data => setCoun(data[0]));
  }, []);

  function handleClickBack() {
    return history.goBack();
  }

  return (
    <div>
      <div className={buttonDiv}>
        <i className="fas fa-long-arrow-alt-left i-flag" />
        <button type="button" onClick={handleClickBack} className={button}>
          Back
        </button>
      </div>
      <div className="UnidadList">
        {coun.length === 0 ? <Loader /> : <UnidadCountry {...coun} />}
      </div>
    </div>
  );
};

export default List;
