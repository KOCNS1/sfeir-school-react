const PEOPLE_API = process.env.NX_PEOPLE_API;

export interface PersonModel {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  position?: string;
  entryDate?: string;
  birthDate?: string;
  gender?: string;
  email?: string;
  phone?: string;
  isManager?: boolean;
  manager?: string;
  managerId?: string;
}

export async function getPeople(): Promise<PersonModel[]> {
  return fetch(`${PEOPLE_API}`).then((response) => response.json());
}

export async function postPeople(data: PersonModel): Promise<PersonModel> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(`${PEOPLE_API}`, requestOptions).then((response) => response.json());
}
