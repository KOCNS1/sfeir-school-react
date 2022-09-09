import { useContext } from 'react';
import { PeopleContext, PeopleContextType } from '../../context/PeopleContext';

export default function usePeople() {
  const { people } = useContext(PeopleContext) as PeopleContextType;

  return people;
}
