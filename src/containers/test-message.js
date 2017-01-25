import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.getIn(['test', 'hasTested'])
    ? 'The test is done'
    : 'The test still not done',
});

export default connect(mapStateToProps)(Message);
