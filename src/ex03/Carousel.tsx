import React from "react";

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
type CarouselState = {
  index: number;
};

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props) {
    super(props);
    this.state = {
      index: 2,
    };
  }

  // Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  // https://wesbos.com/arrow-functions
  next = () => {
    const { succ } = range(0, this.props.people.length - 1);
    this.setState({ index: succ(this.state.index) });
  };

  previous() {
    const { pred } = range(0, this.props.people.length - 1);
    this.setState((state) => ({
      index: pred(state.index),
    }));
  }

  render() {
    return (
      <div className="flex-row">
        <Fab icon="skip_previous" handleClick={this.previous.bind(this)} />
        <div className="carousel">
          <PersonCard
            person={this.props.people[this.state.index]}
            className="current"
          />
        </div>
        <Fab icon="skip_next" handleClick={this.next} />
      </div>
    );
  }
}

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
