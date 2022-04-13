import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { useIsLoading } from "./PeopleContext";
import { SearchableListContainer } from "./SearchableList.container";
import { PlayerContainer } from "./Player.container";
import { PersonContainer } from "./Person.container";

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
          <Route path="/list" component={SearchableListContainer} />
          <Route path="/player" component={PlayerContainer} />
          <Route path="/person/:id" component={PersonContainer} />
          <Redirect to="/list" />
        </Switch>
      )}
    </>
  );
};
