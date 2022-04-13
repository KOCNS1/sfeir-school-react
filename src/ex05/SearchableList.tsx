import React, { useState } from "react";
import { TextField } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str: string, sub: string): boolean => {
  const re = new RegExp(sub, "i");
  return re.test(str);
};

const toPersonCard = (person: Person) => (
  <PersonCard person={person} key={person.id} />
);

type SearchableListProps = {
  people: People;
};

export const filterPeople = (query) => (person: Person) =>
  containsSubstring(person.firstname, query) ||
  containsSubstring(person.lastname, query);

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  const [query, setQuery] = useState("");

  const onQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const cleanQuery = () => {
    setQuery("");
  };

  return (
    <>
      <main>{people.filter(filterPeople(query)).map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ icon: "close", onClick: cleanQuery }}
          label="search by name"
          value={query}
          onChange={onQueryChange}
        />
      </footer>
    </>
  );
};
