import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-unused-vars
import styles from './styles/guardians.scss';

class Welcome extends React.Component {
  render() {
    return <h1>Hello there!</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
