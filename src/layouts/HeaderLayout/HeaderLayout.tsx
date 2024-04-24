import { Avatar } from "../../components";
import styles from "./HeaderLayout.module.scss";

interface HeaderLayoutProps {
  title: string;
}

const HeaderLayout = (props: HeaderLayoutProps) => {
  const { title } = props;
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.headerAccount}>
        <button
          className={styles.logoutButton}
          onClick={() => console.log("Keluar")}
        >
          Logout
        </button>
        &nbsp;
        <Avatar />
      </div>
    </header>
  );
};

export default HeaderLayout;
