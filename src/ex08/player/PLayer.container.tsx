import React from "react";
import { Player } from "../../solution/Player";
import { usePeople } from "../PeopleContext";

export const PlayerContainer = () => {
  const people = usePeople();
  return <Player people={people} />;
};
