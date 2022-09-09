import { useMemo } from 'react';
import { useContext } from 'react';
import { PeopleContextType, PeopleContext } from '../../context/PeopleContext';

export default function useManagers(currentId: string) {
  const { people } = useContext(PeopleContext) as PeopleContextType;

  const managers = useMemo(
    () => people?.filter((p) => p.id !== currentId && p.isManager),
    [currentId, people]
  );
  return managers;
}
