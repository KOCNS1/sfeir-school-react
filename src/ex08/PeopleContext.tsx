import React, { useContext, useEffect, useState } from "react";
import { loadPeople } from "../utils";

type PeopleContextType = {
  people: People;
  isLoading: boolean;
};

export const PeopleContext = React.createContext<PeopleContextType>({
  people: [],
  isLoading: false,
});

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    setIsLoading(true);
    loadPeople()
      .then(setPeople)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const context = {
    people,
    isLoading,
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

// Custom hooks

// people
export const usePeople = () => useContext(PeopleContext).people;

// isLoading
export const useIsLoading = () => useContext(PeopleContext).isLoading;

// personById
export const usePerson = (id: string) => {
  const people = usePeople();
  const person = people.find((p) => p.id === id);
  return person;
};
