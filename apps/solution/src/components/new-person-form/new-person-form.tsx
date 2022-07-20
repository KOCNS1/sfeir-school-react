import { Button, Input, Title } from '@libs/design';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonModel, postPeople } from '../../api/person';
import styles from './new-person-form.module.scss';

/* eslint-disable-next-line */
export function NewPersonForm() {
  const [inputValues, setInputValues] = useState<PersonModel>({
    id: '',
    firstname: '',
    lastname: '',
    photo: '',
    position: ''
  })

  const navigate = useNavigate()
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    postPeople(inputValues).then(res => {
      console.log(res);
      navigate('/people')
    })
  }

  /**
   * Controls the inputs https://reactjs.org/docs/forms.html#controlled-components
   * @param e Event object that contains the value of the input
   */
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setInputValues(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className={"container " + styles['newPerson']}>
      <Title>Add new person</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input type="text" name="firstname" label="First Name" value={inputValues.firstname} onChange={handleChange} mandatory />
        <Input type="text" name="lastname" label="Last Name" value={inputValues.lastname} onChange={handleChange} mandatory />
        <Input type="text" name="photo" label="Picture URL" value={inputValues.photo} onChange={handleChange} mandatory />
        <Input type="text" name="position" label="Position" value={inputValues.position} onChange={handleChange} />
        {/*
        "entryDate": "04/10/2015",
        "birthDate": "22/01/1963",
        "gender": "m",
        "email": "salinas.c@acme.com",
        "phone": "0145652522",
        "isManager": false,
        "manager": "Erika",
        "managerId": "5763cd4d3b57c672861bfa1f" */}
        <Button className={styles['full-width']}>SUBMIT</Button>
      </form>
    </div>
  );
}

export default NewPersonForm;
