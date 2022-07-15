import styles from './new-person-form.module.scss';

/* eslint-disable-next-line */
export interface NewPersonFormProps {}

export function NewPersonForm(props: NewPersonFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewPersonForm!</h1>
    </div>
  );
}

export default NewPersonForm;
