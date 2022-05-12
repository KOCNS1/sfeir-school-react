import React, { useReducer } from "react";
import { useMemo } from "react";
import { useState } from "react";

import { PersonCard } from "../solution/PersonCard";
import { range, RangeResult } from "../utils";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  onClick?: () => void;
};

const Fab: React.FC<FabProps> = ({ icon, onClick }) => (
  <button className="mdc-fab mdc-fab--mini" onClick={onClick}>
    <i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
  </button>
);

type CarouselProps = {
  people: People;
};

type CarouselState = {
  current: number;
};

// export class Carousel extends React.Component<CarouselProps, CarouselState> {
//   range: RangeResult;

//   constructor(props) {
//     super(props);

//     this.state = {
//       current: 0,
//     };

//     this.range = range(0, props.people.length - 1);
//   }

//   onIncrement = () => {
//     this.setState((currentState) => {
//       return {
//         current: this.range.succ(currentState.current),
//       };
//     });
//   };

//   onDecrement = () => {
//     this.setState({
//       current: this.range.pred(this.state.current),
//     });
//   };

//   render() {
//     return (
//       <div className="flex-row">
//         <Fab icon="skip_previous" onClick={this.onDecrement} />

//         <div className="carousel">
//           <PersonCard
//             person={this.props.people[this.state.current]}
//             className="current"
//           />
//         </div>

//         <Fab icon="skip_next" onClick={this.onIncrement} />
//       </div>
//     );
//   }
// }

export const reducer = (peopleSize) => (state: { current: number }, action) => {
  const { succ, pred } = range(0, peopleSize);

  switch (action.type) {
    case "increment":
      return { current: succ(state.current) };
    case "decrement":
      return { current: pred(state.current) };
  }
};

export const Carousel: React.FC<CarouselProps> = ({ people }) => {
  const [state, dispatch] = useReducer(reducer(people.length - 1), {
    current: 0,
  });

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  // view
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" onClick={decrement} />

      <div className="carousel">
        <PersonCard person={people[state.current]} className="current" />
      </div>

      <Fab icon="skip_next" onClick={increment} />
    </div>
  );
};

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
