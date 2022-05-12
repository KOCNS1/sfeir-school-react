import React from "react";

import Header from "./Header";
// import { Header } from "../solution/ex01/Header";
import Delfingen, { Card as CardComponent, test } from "./Card";
// import { Card } from "../solution/ex01/Card";

const message = "React @ SFEIR";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main>
        <CardComponent title={message} />
      </main>
    </>
  );
};
