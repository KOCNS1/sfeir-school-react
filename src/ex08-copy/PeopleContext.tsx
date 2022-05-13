import React, { useEffect, useState } from "react";
import { loadPeople } from "../utils";

export const PeopleContext = React.createContext<People>([]);

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState<People>([]);
  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);
  return (
    <PeopleContext.Provider value={people}> {children}</PeopleContext.Provider>
  );
};
