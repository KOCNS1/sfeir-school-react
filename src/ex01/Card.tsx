// define Card as a React component
// return the elements as in Card.html
// pass it a title prop
import React from "react";

type CardProps = {
  title: string;
};

export const Card = (props: CardProps) => {
  const divStyle = {
    padding: "1rem",
  };

  return (
    <section className="mdc-card" style={{ width: "480px" }}>
      <div style={divStyle}>
        <h1 className="mdc-typography--headline4">{props.title}</h1>
      </div>
    </section>
  );
};
