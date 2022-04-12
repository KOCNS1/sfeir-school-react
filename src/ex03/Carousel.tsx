import React, { FC, useState } from "react";

import { PersonCard } from "../solution/PersonCard";
import { range } from "../utils";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  onFabClick: () => void;
};

const Fab: React.FC<FabProps> = ({ icon, onFabClick }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={onFabClick}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

export const Carousel: FC<CarouselProps> = (props) => {
  const [current, setCurrent] = useState(0);

  const { succ, pred } = range(0, props.people.length - 1);

  const showPrev = () => {
    setCurrent(pred);
  };

  const showNext = () => {
    setCurrent(succ);
  };

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" onFabClick={showPrev} />
      <div className="carousel">
        <PersonCard person={props.people[current]} className="current" />
      </div>
      <Fab icon="skip_next" onFabClick={showNext} />
    </div>
  );
};

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
