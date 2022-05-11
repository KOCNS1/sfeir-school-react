import React from "react";
// define Card as a React component
// return the elements as in Card.html
// pass it a title prop

type CardProps = {
  title: string;
};

export const Card = ({ title }: CardProps) => {
  const styles = { width: "480" };
  return (
    <section className="mdc-card" style={styles}>
      <div style={{ padding: "1rem" }}>
        <h1 className="mdc-typography--headline4">{title}</h1>
      </div>
    </section>
  );
};
