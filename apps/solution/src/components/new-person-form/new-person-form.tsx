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
    <div>
      <h1>Add new person</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

export default NewPersonForm;
