import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import testReducer from './reducers/test-reducer';
import TestMessage from './containers/test-message';
import TestButton from './containers/test-button';

const store = createStore(combineReducers({
  test: testReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TestMessage />
      <TestButton />
    </div>
  </Provider>
  , document.getElementById('app')
);

