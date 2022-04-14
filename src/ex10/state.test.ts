import { reducer } from "./state";
import { people } from "../../data/people.json";

describe('state', () => {
    it('action SET_PEOPLE', () => {
        // Given
        const state = {
            people: []
        };
        const action = { type: 'SET_PEOPLE', payload: { people } };

        // When 
        const result = reducer(state, action);

        // Then
        // expect(result).toBe();
    })

    it('action SET_PERSON', () => {

    });

    it('unknown action', () => {

    });
});