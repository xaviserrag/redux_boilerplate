/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { should } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import testReducer from '../reducers/test-reducer';
import { makeTest } from '../actions/test-actions';

should();
let store;

describe('App State', () => {
  describe('Test', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        test: testReducer,
      }));
    });
    describe('makeTest', () => {
      it('should make hasTested go from false to true', () => {
        store.getState().getIn(['test', 'hasTested']).should.be.false;
        store.dispatch(makeTest());
        store.getState().getIn(['test', 'hasTested']).should.be.true;
      });
    });
  });
});
