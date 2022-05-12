import React, { useMemo, useState } from "react";

import { PersonCard } from "../solution/PersonCard";
import { range, RangeResult } from "../utils";

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
  icon: string;
  onClick: () => void;
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

export const Carousel = (props) => {
  const [current, setCurrent] = useState(0);

  const { succ, pred } = useMemo(
    () => range(0, props.people.length - 1),
    [props.people]
  );

  const decrementState = (oldState) => pred(oldState);

  const onPrev = () => setCurrent(decrementState);
  const onNext = () => setCurrent(succ);

  //

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" onClick={onPrev} />
      <div className="carousel">
        <PersonCard person={props.people[current]} className="current" />
      </div>
      <Fab icon="skip_next" onClick={onNext} />
    </div>
  );
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

//   onPrevClick = () => {
//     this.setState({
//       current: this.range.pred(this.state.current),
//     });
//   };

//   onNextClick = () => {
//     this.setState({
//       current: this.range.succ(this.state.current),
//     });
//   };

//   render() {
//     const { people } = this.props;

//     return (
//       <div className="flex-row">
//         <Fab icon="skip_previous" onClick={this.onPrevClick} />
//         <div className="carousel">
//           <PersonCard person={people[this.state.current]} className="current" />
//         </div>
//         <Fab icon="skip_next" onClick={this.onNextClick} />
//       </div>
//     );
//   }
// }

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
