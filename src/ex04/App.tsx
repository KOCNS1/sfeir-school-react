import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const [view, setView] = useState("LIST");
  const toggleView = () => {
    if (view === "LIST") {
      setView("CAROUSEL");
    } else {
      setView("LIST");
    }
  };

  const cards = people.map((person) => {
    return <PersonCard key={person.id} person={person} />;
  });

  return (
    <>
      <Header>
        <TopAppBarActionItem
          onClick={toggleView}
          icon={view === "LIST" ? "view_module" : "view_carousel"}
        />
        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>{view === "LIST" ? cards : <Carousel>{cards}</Carousel>}</main>
    </>
  );
};
