// define Card as a React component
// return the elements as in Card.html
// pass it a title prop

import React from "react";

type CardProps = {
  title: string;
};

export const test = "Toto";

export const Card: React.FC<CardProps> = (props) => {
  const styleCard = {
    width: 480,
  };

  return (
    <section className="mdc-card" style={styleCard}>
      <div style={{ padding: "1rem" }}>
        <h1 className="mdc-typography--headline4">{props.title}</h1>
      </div>
    </section>
  );
};

export default "Delfingen";
