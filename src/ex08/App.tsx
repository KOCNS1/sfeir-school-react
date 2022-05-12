import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { loadPeople } from "../utils";

import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/Person";
import {
  PeopleContext,
  useIsLoading,
  usePeople,
  usePersonById,
} from "./PeopleContext";
import { PlayerContainer } from "./player/PLayer.container";

const SearchableListWrapper = () => {
  const people = usePeople();
  return <SearchableList people={people} />;
};

const PersonWrapper = ({ match }) => {
  const person = usePersonById(match.params.id);
  return <Person person={person} />;
};

export const App: React.FC = () => {
  const isLoading = useIsLoading();

  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/list" component={SearchableListWrapper} />
          <Route path="/player" component={PlayerContainer} />
          <Route path="/person/:id" component={PersonWrapper} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
