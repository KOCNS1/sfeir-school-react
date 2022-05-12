import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const [currentView, setCurrentView] = useState("LIST");

  const list = people.map((person) => (
    <PersonCard key={person.id} person={person} />
  ));

  const toggleView = () => {
    setCurrentView(currentView === "LIST" ? "CAROUSEL" : "LIST");
  };

  return (
    <>
      <Header>
        <TopAppBarActionItem
          icon={currentView === "LIST" ? "view_carousel" : "view_module"}
          onClick={toggleView}
        />

        {/* use "view_module" as icon for showing the list */}
      </Header>

      <main>
        {currentView === "LIST" ? list : <Carousel>{list[0]}</Carousel>}
      </main>
    </>
  );
};
