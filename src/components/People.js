import React, { useState, useEffect } from 'react';
import Person from './Person';

function People() {
  const personList = [
    {
      name: 'Steve',
      mood: 'grumpy',
      hoodieColor: 'grey',
    },
    {
      name: 'Matt',
      mood: 'happy',
      hoodieColor: 'green',
    },
    {
      name: 'Sarah',
      mood: 'happy',
      hoodieColor: 'blue',
    },
    {
      name: 'Jon',
      mood: 'focused',
      hoodieColor: 'purple',
    },
  ];

  const defaultNameState = '🤖 Slackbot';
  const [favName, setFavName] = useState(defaultNameState);

  useEffect(() => {
    document.title = `${favName} is the current favorite. 💖`;
  }, [favName]);

  return (
    <div className="people">
      {personList.map(person => (
        <Person
          key={`${person.name}-${person.mood}-${person.hoodieColor}`}
          name={person.name}
          mood={person.mood}
          hoodieColor={person.hoodieColor}
          setFavName={setFavName}
          fav={favName === person.name}
        />
      ))}
    </div>
  );
}

export default People;
