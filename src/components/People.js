import React from 'react';
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

  return (
    <div className="people">
      {personList.map(person => (
        <Person name={person.name} mood={person.mood} hoodieColor={person.hoodieColor} />
      ))}
    </div>
  );
}

export default People;
