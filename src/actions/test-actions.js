import { createAction } from 'redux-actions';

export const MAKE_TEST = 'MAKE_TEST';
export const makeTest = createAction(MAKE_TEST, () => true);
