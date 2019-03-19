import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const { mood, hoodieColor, name } = props;

  return (
    <div className={`person ${name}`}>
      <h1>{`${mood} ${name}`}</h1>
      <p>{`${hoodieColor} hoodie today`}</p>
    </div>
  );
}

Person.defaultProps = {
  name: 'Slackbot',
  mood: 'Happy',
  hoodieColor: 'Plaid',
};

Person.propTypes = {
  name: PropTypes.string,
  mood: PropTypes.string,
  hoodieColor: PropTypes.string,
};

export default Person;
