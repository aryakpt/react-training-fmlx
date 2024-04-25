import styles from "./LoadingModal.module.scss"; // Styles for the modal
import clsx from "clsx";

export interface LoadingModalProps {
  isOpen: boolean;
}
const LoadingModal = (props: LoadingModalProps) => {
  const { isOpen } = props;

  return (
    <div className={clsx(styles.loadingModal, { [styles.open]: isOpen })}>
      <div className={styles.loadingSpinner}></div>
      <div className={styles.loadingText}>Loading...</div>
    </div>
  );
};

export default LoadingModal;
