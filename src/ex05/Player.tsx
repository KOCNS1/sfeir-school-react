import React, { useState, cloneElement } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";
import { useRef } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

type CarouselProps = {
  children: React.ReactElement[];
};

type CarouselAPI = {
  next: () => void;
};

const Carousel = ({ children }, ref) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pred, succ } = range(0, childArray.length - 1);

  useImperativeHandle(ref, () => ({
    next: () => setCurrentIndex(succ(currentIndex)),
  }));

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"],
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrentIndex(pred)} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(succ)} />
    </div>
  );
};

const CarouselForwarded = forwardRef<CarouselAPI, CarouselProps>(Carousel);

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const ref = useRef<CarouselAPI>();

  const onNextClick = () => {
    if (ref.current) {
      ref.current.next();
    }
  };

  return (
    <>
      <main>
        <CarouselForwarded ref={ref}>
          {people.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </CarouselForwarded>
      </main>
      <footer>
        <Fab icon="skip_next" onClick={onNextClick} />
      </footer>
    </>
  );
};
