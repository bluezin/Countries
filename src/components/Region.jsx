/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/components/Region.css';

const Region = () => {
  const estado = useSelector(state => state.booleano);
  const color = estado ? 'color-black filter' : 'color-white filter';
  const div = estado ? 'color-black o' : 'color-white o';

  //
  const [change, setChange] = useState(false);
  const ul = change ? 'ul-block ul' : 'ul-none';
  //
  const dispatch = useDispatch();
  //
  function handleClickRegion(name) {
    dispatch({
      type: 'ADD_REGION',
      payload: name,
    });
  }

  return (
    <div className="Region">
      <div className="div-selec">
        <h3 className={color} onClick={() => setChange(!change)}>
          Filter by Region
          <i className="fas fa-chevron-down che-i" />
        </h3>
        <div className={div}>
          <ul className={ul}>
            <li className="li" onClick={() => handleClickRegion('Africa')}>
              Africa
            </li>
            <li className="li" onClick={() => handleClickRegion('Americas')}>
              Americas
            </li>
            <li className="li" onClick={() => handleClickRegion('Europe')}>
              Europe
            </li>
            <li className="li" onClick={() => handleClickRegion('Asia')}>
              Asia
            </li>
            <li className="li" onClick={() => handleClickRegion('Oceania')}>
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Region;
