import React from "react";

type CardProps = {
  title: string;
};

export const test = "toto";

const Card: React.FunctionComponent<CardProps> = ({ title }) => (
  <section className="mdc-card" style={{ width: 480 }}>
    <div style={{ padding: "1rem" }}>
      <h1 className="mdc-typography--headline4">{title}</h1>
    </div>
  </section>
);

export default Card;
