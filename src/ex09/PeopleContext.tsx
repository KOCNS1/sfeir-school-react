import React, { createContext, useState, useEffect, useContext } from "react";
import { loadPeople } from "../utils";

const PeopleContext = createContext<People>([]);

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <PeopleContext.Provider value={people}>{children}</PeopleContext.Provider>
  );
};

// const List = () => {
//   const people = usePeople();
// };

export const usePeople = () => {
  const people = useContext(PeopleContext);
  return people;
};

export function usePerson(id: string): Person | undefined {
  const people = useContext(PeopleContext);
  const person = people.find((p) => p.id === id);
  return person;
}

export const usePeopleMulti = () => {
  const people = useContext(PeopleContext);
  const count = people.length;
  const byId = (id) => people.find((p) => p.id === id);
  return {
    count,
    people,
    byId,
  };
};
