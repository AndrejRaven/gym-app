import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import PrivateRoute from "./components/complex/PrivateRoute";
import Spinner from "./components/complex/Spinner";
import ProfileForm from "./pages/Profile";
import ProfileDashboard from './pages/ProfileDashboard'

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
        path: 'profile',
        element: <PrivateRoute><ProfileDashboard /></PrivateRoute>
      },
      {
        path: 'profile2',
        element: <PrivateRoute><ProfileForm /></PrivateRoute>
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
