import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './button.module.scss';

/* eslint-disable-next-line */
export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ onClick, children, className, ...passThrough }: ButtonProps) {
  return (
    <button className={classNames(styles['button'], className)}
      onClick={onClick}
      {...passThrough}
    >
      {children}
    </button>
  );
}

export default Button;
