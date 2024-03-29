/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './Country';
import Region from './Region';

import '../styles/components/App.css';
import Filtrear from './Filtrear';
import Loader from './Loader';

const App = () => {
  const [valor, setValor] = useState();

  const dispatch = useDispatch();
  const country = useSelector(state => state.countries);
  const searchCountry = useSelector(state => state.searchCountry);

  function handleChange(event) {
    setValor(event.target.value);

    dispatch({
      type: 'FILTER_DATA',
      payload: valor,
    });
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'GET_DATA',
          payload: data,
        });
      });
  }, []);

  return (
    <div>
      <Filtrear handleChange={handleChange} />
      <Region />

      {country.length === 0 ? (
        <Loader />
      ) : (
        <div className="Country">
          {valor === ''
            ? country.map((paises, index) => {
                return (
                  <div className="country-div">
                    <Country {...paises} key={index} />
                  </div>
                );
              })
            : searchCountry.map((paises, index) => {
                return (
                  <div className="country-div" key={index}>
                    <Country {...paises} />
                  </div>
                );
              })}
        </div>
      )}

      <div className="Country">
        {country.map((city, id) => {
          if (!city) return null;

          return (
            <div className="country-div" key={id}>
              <Country {...city} id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
