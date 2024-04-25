import { useSelector } from "react-redux";
import { AppState } from "src/common/store/store";
import { AuthState } from "./auth/store";

const Dashboard = () => {
  const { user } = useSelector<AppState, AuthState>(
    (state) => state.authReducer,
  );
  return (
    <div>
      Welcome back, <b>{user.name}!</b>
    </div>
  );
};

export default Dashboard;
