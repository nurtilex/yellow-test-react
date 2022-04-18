import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? component : <Navigate to="../auth" />;
};

export default PrivateRoute;
