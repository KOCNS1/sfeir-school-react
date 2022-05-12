import React, { createContext, useState, useEffect } from "react";
import { loadPeople } from "../utils";

type PeopleContextType = {
  people: People;
  updatePerson: (newPerson: Person) => void;
};

export const PeopleContext = createContext<PeopleContextType>({
  people: [],
  updatePerson: () => {},
});

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  const updatePerson = (newPerson: Person) => {
    setPeople(
      people.map((person) => {
        if (person.id === newPerson.id) {
          return newPerson;
        } else {
          return person;
        }
      })
    );
  };

  const context: PeopleContextType = {
    people: people,
    updatePerson: updatePerson,
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};
