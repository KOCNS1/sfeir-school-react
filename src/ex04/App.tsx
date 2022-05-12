import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

enum View {
  list = "LIST",
  carousel = "CAROUSEL",
}

export const App: React.FC<AppProps> = ({ people }) => {
  const [view, setView] = useState(View.list);

  const toggleView = () =>
    setView(view === View.list ? View.carousel : View.list);

  const personCards = people.map((person) => <PersonCard person={person} />);

  return (
    <>
      <Header>
        {view === View.list && (
          <TopAppBarActionItem icon="view_carousel" onClick={toggleView} />
        )}
        {view === View.carousel && (
          <TopAppBarActionItem icon="view_module" onClick={toggleView} />
        )}
      </Header>
      <main>{view === View.list ? personCards : "carousel"}</main>
    </>
  );
};
