import React, { useState, useMemo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PersonCard } from "../solution/PersonCard";
import { usePeopleMulti, usePerson } from "./PeopleContext";

import { PersonForm } from "./PersonForm";

export const Person: React.FC<
  RouteComponentProps<{
    id: string;
  }>
> = ({ match }) => {
  // const person = usePerson(match.params.id);
  const { byId } = usePeopleMulti();
  const person = byId(match.params.id);
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
