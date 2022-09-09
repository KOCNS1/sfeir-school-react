import { useContext, useEffect } from 'react';
import { getPerson, PersonModel, updatePerson } from '../../api/person';
import { PeopleContextType, PeopleContext } from '../../context/PeopleContext';

export default function usePerson(id: string) {
  const { person, setPerson } = useContext(PeopleContext) as PeopleContextType;

  useEffect(() => {
    getPerson(id).then(setPerson);
  }, [id]);

  const updatePersonAction = (person: PersonModel): void => {
    updatePerson(person).then((updatedPerson) => {
      setPerson(updatedPerson);
    });
  };

  return [person, updatePersonAction] as const;
}
