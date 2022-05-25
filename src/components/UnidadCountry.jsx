import React from 'react';
import '../styles/components/UnidadCountry.css';

const UnidadCountry = ({
  area,
  flags,
  name,
  population,
  region,
  capital,
  subregion,
  topLevelDomain,
  numericCode,
}) => {
  return (
    <div className="UnidadCountry">
      <div className="centrado-img">
        <img src={flags.png} alt="flag" className="img-country" />
      </div>

      <div className="informacion-unidad">
        <p className="name-unidad">{name.common}</p>

        <p>
          <strong className="strong-unidad">Population:</strong>
          {population}
        </p>

        <p>
          <strong className="strong-unidad">Region:</strong>
          {region}
        </p>
        <p>
          <strong className="strong-unidad">Sub Region</strong>
          {subregion}
        </p>
        <p>
          <strong className="strong-unidad">Capital:</strong>
          {capital}
        </p>
        <p>
          <strong className="strong-unidad">Top Level Domain</strong>
          {topLevelDomain}
        </p>

        <p>
          <strong className="strong-unidad">Area:</strong>
          {area}
        </p>
        <p>
          <strong className="strong-unidad">NumeriCode:</strong>
          {numericCode}
        </p>
      </div>
    </div>
  );
};

export default UnidadCountry;
