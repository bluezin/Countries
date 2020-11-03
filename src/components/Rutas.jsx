import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import List from './List';
import Layaut from './Layaut';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Layaut>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/country/:id" component={List} />
        </Switch>
      </Layaut>
    </BrowserRouter>
  );
};

export default Rutas;
