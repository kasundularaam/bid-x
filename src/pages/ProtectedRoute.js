import { Navigate } from "react-router-dom";

const AuthRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

const NoAuthRoute = ({ children, user }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};
export { AuthRoute, NoAuthRoute };
