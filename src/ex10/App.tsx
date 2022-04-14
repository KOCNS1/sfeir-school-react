import React, { useEffect } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/EditablePerson";
import { Loading } from "../solution/Loading";

import { usePerson, useUpdatePerson } from "./connect";
import { loadPeople } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./state";

// import {
//   withLoading,
//   withPeople,
//   usePerson,
//   useUpdatePerson
// } from "../solution/ex10/connect";

const ConnectedList: any = () => {
  const people = useSelector((state: State) => state.people);
  return <SearchableList people={people} />;
};
const ConnectedPlayer: any = () => {
  const people = useSelector((state: State) => state.people);
  return <Player people={people} />;
};

const ConnectedPerson: React.FC<{ personId: string }> = ({ personId }) => (
  <Person person={usePerson(personId)} onUpdate={useUpdatePerson()} />
);

type AppProps = {
  loadPeople?: () => any;
  loading?: boolean;
};

export const App = () => {
  const dispatch = useDispatch();

  const people = useSelector((state: State) => state.people);

  console.log(people);

  const loading = people.length == 0;

  useEffect(() => {
    loadPeople().then((newPeople) => {
      dispatch({
        type: "SET_PEOPLE",
        payload: newPeople,
      });
    });
  }, [loadPeople]);

  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/list" render={() => <ConnectedList />} />
          <Route path="/player" render={() => <ConnectedPlayer />} />
          <Route
            path="/person/:id"
            render={({ match }: RouteComponentProps<{ id: string }>) => (
              <ConnectedPerson personId={match.params.id} />
            )}
          />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
