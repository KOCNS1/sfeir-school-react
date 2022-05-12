import React, { useState, cloneElement, useEffect } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  currentIndex: number;
  next: () => void;
  prev: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({
  currentIndex,
  next,
  prev,
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
      <Fab icon="skip_previous" mini onClick={prev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={next} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const { pred, succ } = range(0, people.length - 1);
  const goNext = () => setCurrentIndex(succ);
  const goPrev = () => setCurrentIndex(pred);
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (playing) {
      const tid = setTimeout(() => {
        goNext();
      }, 2000);
      return () => clearTimeout(tid);
    }
  }, [playing, goNext]);
  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} prev={goPrev} next={goNext}>
          {people.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab
          icon={playing ? "pause" : "play_arrow"}
          onClick={() => setPlaying(!playing)}
        />
        {/* show the pause icon when playing */}
      </footer>
    </>
  );
};
