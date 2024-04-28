import { clsx } from "clsx";
import styles from "./Input.module.scss";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}
const Input = (props: InputProps) => {
  const { label, ...restProps } = props;
  return (
    <div
      data-testid="input-component"
      className={clsx(restProps.className, styles.input)}
    >
      {label ? (
        <label className={styles.inputLabel} htmlFor={restProps.id}>
          {label}
        </label>
      ) : null}
      <input className={styles.inputForm} {...restProps} />
    </div>
  );
};

export default Input;
