import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TestComponent from './components/test';

const middleWareStore = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={middleWareStore(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={TestComponent} /> 
        </Switch>
      </div>
    </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));
