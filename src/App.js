import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import PrivateRoute from "./components/PrivateRoute";
import Spinner from "./components/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/spiner",
        element: <Spinner />,
      },
    ]
  },
]);

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RouterProvider router={router}>
        <ScrollToTop />  
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
