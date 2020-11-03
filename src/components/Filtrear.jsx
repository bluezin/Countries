import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/Filtrear.css';

const Filtrear = ({ handleChange }) => {
  const estado = useSelector(state => state.booleano);
  const color = estado ? 'div-input color-black' : 'div-input color-white';

  return (
    <div>
      <div className={color}>
        <i className="fas fa-search search" />
        <input onChange={handleChange} placeholder="Search for a country..." />
      </div>
    </div>
  );
};

export default Filtrear;
