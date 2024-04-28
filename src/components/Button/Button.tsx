import { clsx } from "clsx";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variety: "primary" | "secondary" | "outline";
}

const Button = (props: ButtonProps) => {
  const { variety, ...restProps } = props;
  return (
    <button
      {...restProps}
      data-testid="button-component"
      className={clsx(restProps.className, styles.button, styles[variety])}
    >
      {restProps.children}
    </button>
  );
};

export default Button;
