import React, { useState, useMemo } from "react";
import { PersonCard } from "../solution/PersonCard";

import { PersonForm } from "./PersonForm";

type PersonProps = {
  person?: Person;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  const [editing, setEditing] = useState(false);
  const actions = useMemo(
    () => [{ label: "edit", onClick: () => setEditing(true) }],
    []
  );

  const cancel = () => setEditing(false);

  const card = editing ? (
    <PersonForm person={person} cancel={cancel} />
  ) : (
    <PersonCard person={person} actions={actions} />
  );

  return <main>{person ? card : "404 - this person could not be found"}</main>;
};
