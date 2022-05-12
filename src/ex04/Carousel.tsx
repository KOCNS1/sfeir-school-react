import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

export const Carousel: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const childArray = React.Children.toArray(children) as React.ReactElement[];

  const { succ, pred } = range(0, childArray.length - 1);

  const prevElement = React.cloneElement(childArray[pred(current)], {
    className: "prev",
  });
  const currentElement = React.cloneElement(childArray[current], {
    className: "current",
  });
  const nextElement = React.cloneElement(childArray[succ(current)], {
    className: "next",
  });

  const increment = () => setCurrent(succ(current));
  const decrement = () => setCurrent(pred(current));

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={decrement} />
      <div className="carousel">
        {prevElement}
        {currentElement}
        {nextElement}
      </div>
      <Fab icon="skip_next" mini onClick={increment} />
    </div>
  );
};
