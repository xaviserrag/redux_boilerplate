import Immutable from 'immutable';
import { MAKE_TEST } from '../actions/test-actions';

const initialState = Immutable.Map({
  hasTested: false,
});

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TEST:
      return state.set('hasTested', action.payload);
    default:
      return state;
  }
};

export default testReducer;
