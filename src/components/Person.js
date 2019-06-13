import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Person(props) {
  const { mood, hoodieColor, name } = props;
  const [favName, setFav] = useState('🤖 Slackbot');

  const unmarkAllAsFavorite = () => {
    const people = document.querySelectorAll('.person');
    [...people].forEach((person) => {
      person.classList.remove('fav-fav');

      const button = person.querySelector('a');
      button.text = 'set as favorite';
    });
  };

  useEffect(() => {
    document.title = `${favName} is the current favorite. 💖`;
  }, [favName]);

  const markAsFavorite = (e, personName) => {
    e.preventDefault();
    unmarkAllAsFavorite();

    setFav(personName); // having fun with the hook

    document.querySelector(`.${personName}`).classList.add('fav-fav');
    e.currentTarget.text = '💖 The Favorite';
  };

  return (
    <div className={`person ${name}`}>
      <h1>{`${mood} ${name}`}</h1>
      <p>{`${hoodieColor} hoodie today`}</p>
      <a href="#fav" onClick={e => markAsFavorite(e, name)}>
        set as favorite
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
};

export default Person;
