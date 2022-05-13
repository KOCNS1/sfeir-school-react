import { Reducer } from "redux";

type PersonId = string;

export type State = {
  people: Record<PersonId, Person> | null;
};

export type Action =
  | { type: "PEOPLE_LOADED"; payload: People }
  | { type: "PERSON_UPDATED"; person: Person };

const initialState = {
  people: null,
};

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "PEOPLE_LOADED":
      return {
        ...state,
        people: Object.fromEntries(action.payload.map((p) => [p.id, p])),
      };
    case "PERSON_UPDATED":
      return {
        ...state,
        people: {
          ...state.people,
          [action.person.id]: action.person,
        },
      };
    default:
      return state;
  }
};
