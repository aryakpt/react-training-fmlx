import { useSelector } from "react-redux";
import { AppState } from "src/store/store";
import { AuthState } from "./auth/store";

const Dashboard = () => {
  const { user } = useSelector<AppState, AuthState>(
    (state) => state.authReducer,
  );
  return <div>Welcome back, {user.name}</div>;
};

export default Dashboard;
