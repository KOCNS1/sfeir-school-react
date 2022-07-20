import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  mandatory?: boolean
}

export function Input({ name, label, mandatory = false, ...passThrough }: InputProps) {
  return (
    <div className={styles['field-group']}>
      <label htmlFor={name} className={styles['label'] + ' ' + (mandatory ? styles['mandatory'] : '')}>
        {label}
      </label>
      <input name={name} {...passThrough} className={styles['input']} />
    </div>
  );
}

export default Input;
