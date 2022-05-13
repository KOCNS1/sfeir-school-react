import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";

import { Player } from "../solution/Player";
// import { Person } from "../solution/Person";
import { PeopleContext } from "./PeopleContext";
import { PersonCard } from "../solution/PersonCard";
import { SearchableList } from "./SearchableList";

// HOC
interface WithPeople {
  people: People;
}
function connectPeople<ComponentProps extends WithPeople>(
  Component: React.FC<ComponentProps>
): React.FC<Omit<ComponentProps, "people">> {
  const WrappedComponent = (props) => {
    const people = useContext(PeopleContext);
    return <Component {...props} people={people} />;
  };

  return WrappedComponent;
}

type PersonProps = {
  person: Person;
};

type PersonParams = {
  id: string;
};

export const Person: React.FC<PersonProps> = () => {
  const people = useContext(PeopleContext);
  const { id } = useParams<PersonParams>();
  const person = people.find((p) => p.id === id);
  return (
    <main>
      {person ? <PersonCard person={person} /> : `404 - no person with this id`}
    </main>
  );
};

export const App: React.FC = () => {
  const people = useContext(PeopleContext);

  const [query, setQuery] = useState("");

  const ConnectedPlayer = connectPeople(Player);
  const ConnectedList = connectPeople(SearchableList);
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Switch>
          <Route
            path="/list"
            render={() => <ConnectedList query={query} setQuery={setQuery} />}
          />
          <Route path="/player" component={ConnectedPlayer} />
          <Route path="/person/:id" component={Person} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
