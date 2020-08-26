import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople } from "../utils";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { Person } from "../solution/Person";

export const App: React.FC = () => {
  const [people, setPeople] = useState<People>([]);

  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <NavLink to="/player">
          <TopAppBarActionItem icon="view_carousel" />
        </NavLink>
        <NavLink to="/list">
          <TopAppBarActionItem icon="view_module" />
        </NavLink>
      </Header>
      {
        people.length === 0 ? <Loading /> : (
          <Switch>
            <Route path="/list" render={routeProps => {
              // do stuff
              // routeProps.match.params => id

              return (
                <SearchableList people={people} />
              );
            }} />
            <Route path="/player">
              <Player people={people} />
            </Route>
            
            <Route path="/person/:id" render={({ match: { params: { id }}}) => {
              const person = people.find(p => p.id === id);
              return <Person person={person}/>;
            }} />
            
            <Redirect to="/list" />
          </Switch>
        )
      }
    </>
  );
};
