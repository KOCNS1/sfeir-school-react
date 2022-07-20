import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  mandatory?: boolean
}

export function Input({ name, label, mandatory = false, value, onChange, ...passThrough }: InputProps) {
  return (
    <div className={styles['field-group']} data-cy={'field-group' + name}>
      <label htmlFor={name} className={styles['label'] + ' ' + (mandatory ? styles['mandatory'] : '')}>
        {label}
      </label>
      <input name={name} {...passThrough} className={styles['input']} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
