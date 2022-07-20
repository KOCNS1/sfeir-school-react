import { Button, Input } from '@libs/design';
import { FormEvent } from 'react';
import styles from './new-person-form.module.scss';

/* eslint-disable-next-line */
export interface NewPersonFormProps { }

export function NewPersonForm(props: NewPersonFormProps) {
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log("Test", e)
  }
  return (
    <div className={"container " + styles['newPerson']}>
      <h1>Add new person</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input type="text" name="firstName" label="First Name" mandatory />
        <Input type="text" name="lastName" label="Last Name" mandatory />
        <Input type="text" name="pictureURL" label="Picture URL" mandatory />
        <Input type="text" name="position" label="Position" />
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
