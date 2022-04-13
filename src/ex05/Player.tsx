import React, {
  useState,
  cloneElement,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";
import { PersonCard } from "../solution/PersonCard";

type CarouselProps = {
  children: React.ReactElement[];
};

const Carousel = forwardRef<{ next: () => void }, CarouselProps>(
  ({ children }, ref) => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const [currentIndex, setCurrentIndex] = useState(0);
    const { pred, succ } = range(0, childArray.length - 1);

    // useImperativeHandle  ....

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
  }
);

type PlayerProps = {
  people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
  const ref = useRef();

  return (
    <>
      <main>
        <Carousel ref={ref}>
          {people.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon="skip_next" />
      </footer>
    </>
  );
};
