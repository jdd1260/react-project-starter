import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Example from './components/example';

const middleWareStore = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={middleWareStore(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Example} /> 
        </Switch>
      </div>
    </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));
