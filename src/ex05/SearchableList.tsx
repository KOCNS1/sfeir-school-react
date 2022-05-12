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

const filterPeople = (search) => (person) =>
  containsSubstring(person.firstname, search) ||
  containsSubstring(person.lastname, search);

type SearchableListProps = {
  people: People;
};

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <main>{people.filter(filterPeople(search)).map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ icon: "close", onClick: () => console.log("clear") }}
          label="search by name"
          value={search}
          onChange={onInputChange}
        />
      </footer>
    </>
  );
};
