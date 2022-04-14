import React, { useState, useMemo, useContext } from "react";
import { PersonCard } from "../solution/PersonCard";
import { savePerson } from "../utils";
import { PeopleContext } from "./PeopleContext";

import { PersonForm } from "./PersonForm";

type PersonProps = {
  person?: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {

  const { updatePerson } = useContext(PeopleContext);

  const [editing, setEditing] = useState(false);
  const actions = useMemo(
    () => [{ label: "edit", onClick: () => setEditing(true) }],
    []
  );

  const onSave = (newPerson) => {
    savePerson(newPerson)
      .then((updatedPerson) => {
        updatePerson(updatedPerson);
      })
      .catch(() => {
        console.error("ohoh.... :'(");
      })
      .finally(() => {
        setEditing(false);
      });
  };

  const card = editing ? (
    <PersonForm person={person} onSave={onSave} onCancel={() => {}} />
  ) : (
    <PersonCard person={person} actions={actions} />
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};
