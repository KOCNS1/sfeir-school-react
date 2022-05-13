import { connect, useDispatch, useSelector } from "react-redux";
import { savePerson, loadPeople } from "../utils";
import { State, Action } from "./state";
import { Dispatch } from "redux";

function selector(state: State): { people: People } {
  return { people: Object.values(state.people) };
}
// provide people from state
export const withPeople = connect(selector);

// provide loading from state
// and the loadPeople function dispatching PEOPLE_LOADED
export const withLoading = connect(
  (state: State) => ({ loading: state.people == null }), // mapStateToProps
  (dispatch: Dispatch<Action>) => ({
    //mapDispatchToProps
    loadPeople: () => {
      loadPeople().then((value) =>
        dispatch({ type: "PEOPLE_LOADED", payload: value })
      );
    },
  })
);

// provide person from state using useSelector
export const usePerson = (id: string): Person => {
  const person = useSelector<State, Person>((state) => state.people[id]);
  return person;
};

// and the onUpdate callback dispatching SET_PERSON using useDispatch
export const useUpdatePerson = () => {
  const dispatch = useDispatch();
  return (person: Person) => {
    return savePerson(person).then((newPerson) => {
      dispatch({ type: "PERSON_UPDATED", person: newPerson });
    });
  };
};
