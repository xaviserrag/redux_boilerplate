import { connect } from 'react-redux';
import Button from '../components/button';
import { makeTest } from '../actions/test-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makeTest()); },
  actionLabel: 'Test',
});

export default connect(null, mapDispatchToProps)(Button);
