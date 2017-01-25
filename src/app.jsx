import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = props => (
  <div>
    Hello World: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message="LOL" />, document.getElementById('app'));
