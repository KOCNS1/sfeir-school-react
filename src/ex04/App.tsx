import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const [route, setRoute] = useState("LIST");

  const children = people.map((person) => (
    <PersonCard key={person.id} person={person} />
  ));

  return (
    <>
      <Header>
        <TopAppBarActionItem icon="view_carousel" />
        <TopAppBarActionItem icon="view_module" />
        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>
        {route === "LIST" ? children : <Carousel>{children}</Carousel>}
      </main>
    </>
  );
};
