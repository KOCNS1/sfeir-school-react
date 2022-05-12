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

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (ev) => setQuery(ev.target.value);
  const clearQuery = () => setQuery("");

  const filtered = people.filter((p) =>
    containsSubstring(`${p.firstname} ${p.lastname}`, query)
  );
  return (
    <>
      <main>{filtered.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          value={query}
          onChange={updateQuery}
          trailingIcon={{ icon: "close", onClick: clearQuery }}
          label="search by name"
        />
      </footer>
    </>
  );
};
