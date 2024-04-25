import { Button, Input } from "src/components";
import styles from "./Login.module.scss";
import FormulatrixLogo from "src/assets/images/logo.webp";
import { AUTH_LOCAL_NAME } from "src/common/constants";
import { useState } from "react";
import { UserLocalStorage } from "src/common/interfaces";
import { useRedirectIfLoggedIn } from "src/common/hooks/useRedirectIfLoggedIn";
import { paths } from "src/routes/paths";
import { useNavigate } from "react-router-dom";
import { userDummy } from "../../constants";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authActions";

const Login = () => {
  useRedirectIfLoggedIn(paths.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Illustration validation from BE
    const isExist =
      userDummy.username === form.username &&
      userDummy.password === form.password;

    // illustration response from BE about the data from user
    const user = userDummy;
    if (isExist) {
      const data: UserLocalStorage = {
        name: user.name,
        username: user.username,
      };
      dispatch(authActions.setCurrentUser(user));
      localStorage.setItem(AUTH_LOCAL_NAME, JSON.stringify(data));
      navigate(paths.dashboard, { replace: true });
    }
  };

  return (
    <main className={styles.login}>
      <div className={styles.loginCard}>
        <header className={styles.loginCardHeader}>
          <img
            className={styles.loginCardHeaderImage}
            src={FormulatrixLogo}
            alt="Logo Formulatrix"
          />
          <h3>Welcome Back, Scientist!</h3>
        </header>
        <main>
          <form className={styles.loginCardForm} onSubmit={handleLogin}>
            <Input
              label="Username"
              placeholder="your username"
              type="text"
              value={form.username}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <Input
              label="Password"
              placeholder="your password"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <Button
              variety="primary"
              type="submit"
              className={styles.loginCardFormButton}
            >
              Login
            </Button>
          </form>
        </main>
      </div>
    </main>
  );
};

export default Login;
