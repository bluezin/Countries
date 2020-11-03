import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Head.css';
import DarkMode from './DarkMode';

const Head = () => {
  const [dark, setDark] = useState(false);
  const main = dark ? 'color-black Head' : 'color-white Head';
  const a = dark ? 'isA' : 'isB';
  const dispatch = useDispatch();

  dispatch({
    type: 'BOOLEANO_ADD',
    payload: dark,
  });

  return (
    <div>
      <div className={main}>
        <Link to="/" className={a}>
          <h1 className="where-head">Where in the world?</h1>
        </Link>
        <div className="Dark-head">
          <DarkMode dark={dark} setDark={setDark} />
        </div>
      </div>
    </div>
  );
};

export default Head;
