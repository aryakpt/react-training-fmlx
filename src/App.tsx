import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
