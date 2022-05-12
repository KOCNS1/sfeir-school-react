import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PersonCard } from "../solution/PersonCard";

type PersonProps = {
  person: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  const history = useHistory();
  if (person) {
    return <PersonCard person={person} />;
  } else {
    const goBack = (ev) => history.goBack();
    return (
      <div>
        Person not found
        <Link to="/list">Return to list</Link>
        <button onClick={goBack}>Go Back</button>
      </div>
    );
  }
};
