// client starting point app js react

import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

//redux part
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


//creating redux store

// const store = createStore(reduces,{},applyMiddleware(thunk))

ReactDOM.hydrate(
   
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
   ,
    document.querySelector('#root')
  );