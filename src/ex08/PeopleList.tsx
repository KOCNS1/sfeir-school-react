import React, { useContext } from 'react';
import { Person } from '../solution/Person';
import { PeopleContext } from './PeopleContext';

export default () => {
  const people = useContext(PeopleContext);

  return (
    <main>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </main>
  );
};
