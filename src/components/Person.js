import React from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const {
    mood, hoodieColor, name, setFavName, fav,
  } = props;

  const markAsFavorite = (e, personName) => {
    e.preventDefault();

    setFavName(personName);
  };

  const favClass = fav ? 'fav-fav' : null;

  return (
    <div className={`person ${name} ${favClass}`}>
      <h1>{`${mood} ${name}`}</h1>
      <p>{`${hoodieColor} hoodie today`}</p>
      <a href="#fav" onClick={(e) => markAsFavorite(e, name)}>
        {fav ? '💖 The Favorite' : 'set as favorite'}
      </a>
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
  fav: PropTypes.bool.isRequired,
  setFavName: PropTypes.func.isRequired,
};

export default Person;
