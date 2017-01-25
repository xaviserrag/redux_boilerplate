import { MAKE_TEST } from '../actions/test-actions';

const initialState = {
  hasTested: false,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TEST:
      return { hasTested: action.payload };
    default:
      return state;
  }
};

export default testReducer;
