import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import SearchView from './views/SearchView';

import reducer from './reducers';
import * as middleware from './actions/middleware';

const store = createStore(
  reducer,
  applyMiddleware(
    middleware.fetchMiddleware,
    thunkMiddleware
  )
);

class Index extends Component {
  render() {
    return(
      <Provider store={store} style={{flex: 1}}>
        <SearchView />
      </Provider>
    );
  }
}
