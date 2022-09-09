import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getPeople, PersonModel } from '../api/person';

interface Props {
  children: JSX.Element;
}

export interface PeopleContextType {
  people: PersonModel[] | null;
  person: PersonModel | null;
  setPeople: Dispatch<SetStateAction<PersonModel[]>>;
  setPerson: Dispatch<SetStateAction<PersonModel | null>>;
}

export const PeopleContext = createContext<PeopleContextType | null>(null);

const PeopleContextProvider = ({ children }: Props) => {
  const [people, setPeople] = useState<PersonModel[]>([]);
  const [person, setPerson] = useState<PersonModel | null>(null);

  useEffect(() => {
    getPeople().then(setPeople);
  }, []);

  return (
    <PeopleContext.Provider value={{ people, person, setPeople, setPerson }}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
