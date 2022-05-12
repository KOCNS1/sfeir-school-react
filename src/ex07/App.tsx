import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";
import { Switch, Route, Redirect, NavLink, useHistory } from "react-router-dom";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople } from "../utils";
import { Person } from "./Person";

export const App: React.FC = () => {
  const history = useHistory();
  const [people, setPeople] = useState<People>([]);
  useEffect(() => {
    loadPeople().then(setPeople);
  }, []);

  const toList = () => history.push("/list");

  return (
    <>
      <Header>
        <NavLink to="/player">
          <TopAppBarActionItem icon={"view_carousel"} />
        </NavLink>
        <TopAppBarActionItem icon={"view_module"} onClick={toList} />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/player" component={() => <Player people={people} />} />
          <Route
            path="/list"
            render={() => <SearchableList people={people} />}
          />
          <Route path="/person/:id">
            {({ match }) => (
              <Person person={people.find((p) => p.id === match.params.id)} />
            )}
          </Route>
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
