import React, { useContext } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";

import { Person } from "./EditablePerson";
import { usePeople, usePeopleMulti } from "./PeopleContext";

const ContextualList: React.FC = () => {
  const people = usePeople();
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const people = usePeople();
  return <Player people={people} />;
};

// const ContextualPerson: React.FC<RouteComponentProps<{
//   id: string;
// }>> = ({ match }) => {
//   const people = useContext(PeopleContext);
//   const person = people.find((p) => p.id === match.params.id);
//   return <Person person={person} />;
// };

export const App: React.FC = () => {
  const { count } = usePeopleMulti();
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {count === 0 ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/list" component={ContextualList} />
          <Route path="/player" component={ContextualPlayer} />
          <Route path="/person/:id" component={Person} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
