import React, { useState } from "react";

import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  handleClick: () => void;
};

const Fab: React.FC<FabProps> = ({ icon, handleClick }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={handleClick}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

export const Carousel = ({ people }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const { succ, pred } = range(0, people.length - 1);
  const next = () => {
    setIndex(succ);
  };
  const previous = () => {
    setIndex(pred(index));
  };
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" handleClick={previous} />
      <div className="carousel">
        <PersonCard person={people[index]} className="current" />
      </div>
      <Fab icon="skip_next" handleClick={next} />
    </div>
  );
};

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
