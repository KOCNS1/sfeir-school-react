import React from "react";
import { useParams } from "react-router-dom";
import { Person } from "../solution/Person";
import { usePerson } from "./PeopleContext";

export const PersonContainer = () => {
  const { id } = useParams<{ id: string }>();
  const person = usePerson(id);

  return <Person person={person} />;
};
