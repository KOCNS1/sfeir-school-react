import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: string,
  onClick: () => void
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['button']} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
