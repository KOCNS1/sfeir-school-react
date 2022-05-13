import React, { useState, useLayoutEffect, useContext } from "react";
import { TextField } from "@rmwc/textfield";

import { toPersonCard } from "../solution/PersonCard";
import { PeopleContext } from "./PeopleContext";

const nameContains = (query: string) => {
  const re = new RegExp(query, "i");
  return (p: Person) => re.test(p.firstname) || re.test(p.lastname);
};

export const SearchableList: React.FC<{
  people: People;
  query: string;
  setQuery: (string) => void;
}> = ({ people, query, setQuery }) => {
  // const [query, setQuery] = useState("");
  const filteredPeople = people.filter(nameContains(query));
  return SearchableListView({
    people: filteredPeople,
    query,
    setQuery,
  });
};

export const ConnectedList: React.FC<{
  query: string;
  setQuery: (string) => void;
}> = ({ query, setQuery }) => {
  const people = useContext(PeopleContext);
  return <SearchableList people={people} query={query} setQuery={setQuery} />;
};

export const SearchableListView: React.FC<{
  people: (Person | string)[];
  currentId?: string;
  query: string;
  setQuery: (v: string) => void;
}> = ({ people, currentId = "", query, setQuery }) => {
  useLayoutEffect(() => {
    const currentCard = currentId && document.getElementById(`p-${currentId}`);
    if (currentCard)
      currentCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [currentId]);

  return (
    <>
      <main>{people.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{
            icon: "close",
            onClick: () => setQuery(""),
          }}
          label="search by name"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </footer>
    </>
  );
};
