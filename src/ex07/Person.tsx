import React from "react";
import { PersonCard } from "../solution/PersonCard";

type PersonProps = {
  person: Person | undefined;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  return (
      <main>
          {person ? <PersonCard person={person} /> : "not found :'("}
      </main>
  );
};
