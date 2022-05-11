import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const [index, setIndex] = useState(0);
  const { succ, pred } = range(0, childArray.length - 1);

  const goNext = () => setIndex(succ);
  const goPrev = () => setIndex(pred);
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={goPrev} />
      <div className="carousel">
        {childArray.map((element, idx) => {
          if (idx === index) {
            return React.cloneElement(element, { className: "current" });
          } else if (idx === pred(index)) {
            return React.cloneElement(element, { className: "prev" });
          } else if (idx === succ(index)) {
            return React.cloneElement(element, { className: "next" });
          } else {
            return element;
          }
        })}
      </div>
      <Fab icon="skip_next" mini onClick={goNext} />
    </div>
  );
};
