import { AUTH_LOCAL_NAME } from "src/common/constants";
import { Avatar, Button } from "../../components";
import styles from "./HeaderLayout.module.scss";
import { useNavigate } from "react-router-dom";
import { paths } from "src/routes/paths";
import { useSelector } from "react-redux";
import { AppState } from "src/common/store/store";
import { AuthState } from "src/contents/auth/store";

interface HeaderLayoutProps {
  title: string;
}

const HeaderLayout = (props: HeaderLayoutProps) => {
  const navigate = useNavigate();
  const { title } = props;

  const { user } = useSelector<AppState, AuthState>(
    (state) => state.authReducer,
  );

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
        <Avatar name={user.name} image={user.avatar} />
      </div>
    </header>
  );
};

export default HeaderLayout;
