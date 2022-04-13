import React from "react";
import { SearchableList } from "../solution/SearchableList";
import { usePeople } from "./PeopleContext";

export const SearchableListContainer = () => {
  const people = usePeople();
  return <SearchableList people={people} />;
};
