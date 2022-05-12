import React, { useState, cloneElement } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";
import { useEffect } from "react";

type CarouselProps = {
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const childArray = React.Children.toArray(
    props.children
  ) as React.ReactElement[];
  const { pred, succ } = range(0, childArray.length - 1);

  const cards: [number, string][] = [
    [succ(props.currentIndex), "next"],
    [props.currentIndex, "current"],
    [pred(props.currentIndex), "prev"],
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={props.onPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={props.onNext} />
    </div>
  );
};

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { pred, succ } = range(0, people.length - 1);

  const onNext = () => setCurrentIndex(succ);
  const onPrev = () => setCurrentIndex(pred);

  const onPlayClick = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      const clearId = setTimeout(() => {
        setCurrentIndex(succ);
      }, 1000);

      return () => {
        clearTimeout(clearId);
      };
    }
  });

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
        {playing ? (
          <Fab icon="pause" onClick={onPlayClick} style={ {} } />
        ) : (
          <Fab icon="play_arrow" onClick={onPlayClick} />
        )}

        {/* show the pause icon when playing */}
      </footer>
    </>
  );
};
