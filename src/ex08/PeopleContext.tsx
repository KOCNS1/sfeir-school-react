import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { loadPeople } from "../utils";

export const PeopleContext = React.createContext<{
  people: People;
  isLoading: boolean;
}>({
  people: [],
  isLoading: false,
});

// => <PeopleContext.Provider value={}>{children}</..>

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadPeople()
      .then(setPeople)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // useEffect fetch

  const context = {
    people: people,
    isLoading: isLoading,
  };

  return (
    <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>
  );
};

// custom hooks

export const usePeople = () => useContext(PeopleContext).people;

export const useIsLoading = () => {
  return useContext(PeopleContext).isLoading;
};

export const usePersonById = (id: string): Person | undefined => {
  console.log(id);
  console.log(usePeople());
  return usePeople().find((person) => person.id === id);
};
