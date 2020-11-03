import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Rutas from './components/Rutas';

const initialState = {
  countries: [],
  searchCountry: [],
  booleano: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_DATA': {
      return { ...state, countries: action.payload };
    }
    case 'FILTER_DATA': {
      const results = state.countries.filter(e => {
        return `${e.name} `
          .toLowerCase()
          .startsWith(`${action.payload}`.toLowerCase());
      });

      return { ...state, searchCountry: results };
    }
    case 'ADD_REGION': {
      const resultsRegio = state.countries.filter(e => {
        return `${e.region}`
          .toLowerCase()
          .includes(`${action.payload}`.toLowerCase());
      });
      return { ...state, searchCountry: resultsRegio };
    }
    case 'BOOLEANO_ADD': {
      const variable = action.payload;
      return { ...state, booleano: variable };
    }

    default: {
      return state;
    }
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Rutas>
      <App />
    </Rutas>
  </Provider>,

  document.getElementById('app')
);
