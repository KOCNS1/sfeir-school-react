import React from "react";

import { Header } from "../solution/Header";

import { RecipeCard } from "./RecipeCard";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  return (
    <>
      <Header />
      <main>
        <RecipeCard />
      </main>
    </>
  );
};
