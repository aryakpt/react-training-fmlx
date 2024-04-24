import { AUTH_LOCAL_NAME } from "src/common/constants";
import { Avatar, Button } from "../../components";
import styles from "./HeaderLayout.module.scss";
import { useNavigate } from "react-router-dom";
import { paths } from "src/routes/paths";

interface HeaderLayoutProps {
  title: string;
}

const HeaderLayout = (props: HeaderLayoutProps) => {
  const navigate = useNavigate();
  const { title } = props;
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.headerAccount}>
        <Button
          variety="outline"
          className={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem(AUTH_LOCAL_NAME);
            navigate(paths.login);
          }}
        >
          Logout
        </Button>
        &nbsp;
        <Avatar />
      </div>
    </header>
  );
};

export default HeaderLayout;
