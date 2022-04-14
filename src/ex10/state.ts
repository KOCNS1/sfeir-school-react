import { Reducer } from "redux";

export type State = {
  people: People
};

// export type Action = { type: "SET_PEOPLE" } | { type: "SET_PERSON" };
export type Action = {
  type: "SET_PEOPLE" | "SET_PERSON",
  payload: any
}

const initialState = {
  people: []
};

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {

  console.log(action);

  switch (action.type) {
    case "SET_PEOPLE":
      return { people: action.payload }
    case "SET_PERSON":
    default:
      return state;
  }
};
