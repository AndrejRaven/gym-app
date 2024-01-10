import { Navigate } from 'react-router-dom';
import Spinner from './Spinner';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading  } = useAuth();

  if (loading) {
    // You might want to show a loading spinner here
    return (
      <Spinner />
    )
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;