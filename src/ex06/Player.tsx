import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({
  currentIndex,
  onNext,
  onPrev,
  children,
}) => {
  const childArray = React.Children.toArray(children) as React.ReactElement[];
  const { pred, succ } = range(0, childArray.length - 1);

  const cards: [number, string][] = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"],
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={onNext} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { pred, succ } = range(0, people.length - 1);

  useEffect(() => {
    if (isPlaying) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex(succ);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const onNext = () => {
    setCurrentIndex(succ);
  };

  const onPrev = () => {
    setCurrentIndex(pred);
  };

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} onNext={onNext} onPrev={onPrev}>
          {people.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        {isPlaying ? (
          <Fab icon="pause" onClick={togglePlay} />
        ) : (
          <Fab icon="play_arrow" onClick={togglePlay} />
        )}

        {/* show the pause icon when playing */}
      </footer>
    </>
  );
};
