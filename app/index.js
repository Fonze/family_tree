import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import SearchStack from './navigators/SearchStack';

import reducer from './reducers';
import * as middleware from './actions/middleware';

const store = createStore(
  reducer,
  applyMiddleware(
    middleware.fetchMiddleware,
    thunkMiddleware
  )
);

const Index = (props) => {
  return (
    <Provider store={store} style={{flex: 1}}>
      <SearchStack />
    </Provider>
  );
}

export default Index;
