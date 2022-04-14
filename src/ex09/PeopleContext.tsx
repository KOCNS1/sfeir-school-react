import React, { createContext, useState, useEffect, useContext } from "react";
import { loadPeople } from "../utils";

type PeopleContextType = {
  people: People;
  updatePerson: (person: Person) => void;
};

export const PeopleContext = createContext<PeopleContextType>(
  {} as PeopleContextType
);

export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);

  const refreshPeople = () => {
    loadPeople().then(setPeople);
  };

  useEffect(() => {
    refreshPeople();
  }, []);

  const updatePerson = (updatedPerson) => {
    const updatedPeople = people.map((person) => {
      if (person.id === updatedPerson.id) {
        return updatedPerson;
      } else {
        return person;
      }
    });

    setPeople(updatedPeople);
  };

  const context = {
    people,
    updatePerson,
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};
